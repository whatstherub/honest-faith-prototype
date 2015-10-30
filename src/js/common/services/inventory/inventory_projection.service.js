/* global _ */
/* global moment */
class InventoryProjectionService {
  constructor(InventoryDetailsService,SupplyAndDemandHistoryService) {
    this.inventoryDetailsService = InventoryDetailsService;
    this.supplyAndDemandHistoryService = SupplyAndDemandHistoryService;
  }

  calculateProjections(product,history) {
    let today = moment().utc().startOf('day');

    let startingCount = this.inventoryDetailsService
      .getCurrentInventoryLevelForProductAt(product, today);

    let demandAverages    = this.calculateAverageDemand(product,history),
        demandVariability = this.calculateAverageDemandVariability(product,history);

    return {
      asOf: today,
      currentInventory: startingCount,
      averageDemand: demandAverages,
      demandVariability: demandVariability
    };
  }

  calculateTotalDemandByDay(product,history) {
    let today = moment().utc().startOf('day');

    let startingCount = this.inventoryDetailsService
      .getCurrentInventoryLevelForProductAt(product, today);

    console.warn("starting count:", startingCount);

    let days = _.groupBy( history, (h) => ( h.day ) );

    return _.map(days, (dayData,key) => {
      let count = _.reduce(dayData, (result,dataPoint) => {
        return result += dataPoint.quantity;
      },0);

      console.warn('before moment(key)', key);
      console.warn(typeof key);

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
