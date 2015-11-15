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
      .getCurrentInventoryLevelForProductAt(product, today);

    let demandAverages    = this.calculateAverageDemand(product,history),
        demandVariability = this.calculateAverageDemandVariability(product,history);

    if( history ) {
      console.warn('got history');
    } else {
      console.error("history",history);
    }

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

  detectInventoryStates( product, dayCounts, history ) {
    let warningThreshold = 48000;
    let criticalThreshold = 43000;

    let outOfStockDay = _.find( dayCounts, (c) => c[1] <= 0 );
    let stockWarningDay = _.find( dayCounts, (c) => c[1] <= warningThreshold );
    let stockCriticalDay = _.find( dayCounts, (c) => c[1] <= criticalThreshold );

    return {
      outOfStock: {},// { day: outOfStockDay[0], count: outOfStockDay[1] },
      stockWarning: { day: stockWarningDay[0], count: stockWarningDay[1] },
      stockCritical: { day: stockCriticalDay[0], count: stockCriticalDay[1] }
    };
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
