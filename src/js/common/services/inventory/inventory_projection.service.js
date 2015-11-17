/* global _ */
/* global moment */
class InventoryProjectionService {
  constructor(InventoryDetailsService,SupplyAndDemandHistoryService) {
    Object.assign(this,{
      inventoryDetailsService: InventoryDetailsService,
      supplyAndDemandHistoryService: SupplyAndDemandHistoryService
    });
  }

  calculateProjections(product,history) {
    let today = moment().utc().startOf('day');

    let startingCount = this.inventoryDetailsService
      .getCurrentInventoryLevelForProductAt(product, today, history);

    let demandAverages    = this.calculateAverageDemand(product,history),
        demandVariability = this.calculateAverageDemandVariability(product,history);

    let dayCounts = this.calculateTotalDemandByDay(product,history),
        inventoryStates = this.detectInventoryStates(product, dayCounts, history);

    return {
      asOf: today,
      currentInventory: startingCount,
      averageDemand: demandAverages,
      demandVariability: demandVariability,
      inventoryStates: inventoryStates
    };
  }

  timeOrFarFuture(timeWithData) {
    if( timeWithData && timeWithData.length > 0 ) {
      console.warn('time found', timeWithData);
      return timeWithData[0];
    } else {
      console.warn('no time found');
      return moment().add('days',365).valueOf();
    }
  }

  augmentWithTimesIfAvailable(result,timeWithData) {
    result.day = result.detected
      ? timeWithData[0]
      : this.timeOrFarFuture(timeWithData);

    if( timeWithData && timeWithData.length > 1 ) {
      result.count = timeWithData[1];
    }

    return result;
  }

  detectInventoryStates( product, dayCounts, history ) {
    let warningThreshold  = 38000,
        criticalThreshold = 30000;

    let outOfStockDay     = _.find( dayCounts, (c) => c[1] <= 0 ),
        stockWarningDay   = _.find( dayCounts, (c) => c[1] <= warningThreshold ),
        stockCriticalDay  = _.find( dayCounts, (c) => c[1] <= criticalThreshold );

    let detectedOutOfStock = outOfStockDay !== undefined,
        detectedWarning    = stockWarningDay !== undefined,
        detectedCritical   = stockCriticalDay !== undefined;

    let ret = {
      outOfStock: { detected: detectedOutOfStock },
      stockWarning: { detected: detectedWarning },
      stockCritical: { detected: detectedCritical }
    };

    console.error(ret);

    this.augmentWithTimesIfAvailable(ret.outOfStock, outOfStockDay);
    this.augmentWithTimesIfAvailable(ret.stockWarning, stockWarningDay);
    this.augmentWithTimesIfAvailable(ret.stockCritical, stockCriticalDay);

    return ret;
  }

  calculateTotalDemandByDay(product,history) {
    let today = moment().utc().startOf('day');

    let startingCount = this.inventoryDetailsService
      .getCurrentInventoryLevelForProductAt(product, today);

    let days = _.groupBy( history, (h) => ( h.day ) );

    return _.map(days, (dayData,key) => {
      let count = _.reduce(dayData, (result,dataPoint) => {
        if( dataPoint.type != 'supply' ) {
          return result += dataPoint.quantity;
        } else {
          return result -= dataPoint.quantity;;
        }
      },0);

      let dayValue      = dayData[0].day.utc().startOf('day').valueOf(),
          runningTotal  = startingCount -= count;

      return [ dayValue , runningTotal ];
    });
  }

  calculateAverageDemandVariability(product,history) {
    return this.supplyAndDemandHistoryService
      .getHistoricalDemandVariabilityWithSource(product);
  }

  calculateAverageDemand(product,history) {
    return this.supplyAndDemandHistoryService
      .getHistoricalDemandAverageForProductWithSource(product);
  }
}

export default InventoryProjectionService;
