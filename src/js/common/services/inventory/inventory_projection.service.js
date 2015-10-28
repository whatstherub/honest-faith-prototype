class InventoryProjectionService {
  constructor(InventoryDetailsService) {
    this.inventoryDetailsService = InventoryDetailsService;
  }

  calculateTotalDemandByDay(product,history) {
    let today = moment().startOf('day');

    let startingCount = this.inventoryDetailsService
      .getCurrentInventoryLevelForProductAt(product, today);

    console.warn("starting count:", startingCount);
    
    let days = _.groupBy(history, (h) => {
      return h.day;
    });

    let dayCounts = _.map(days, (dayData,key) => {
      let count = _.reduce(dayData, (result,dataPoint) => {
        return result += dataPoint.quantity;
      },0);

      let dayValue = moment(key).startOf('day').utc().valueOf(),
          runningTotal = startingCount -= count;

      return [ dayValue , runningTotal ];
    });

    return dayCounts;
  }
}

export default InventoryProjectionService;
