class InventoryProjectionService {
  constructor() {}

  calculateTotalDemandByDay(history) {
    let startingCount = 55000;

    let days = _.groupBy(history, (h) => {
      return h.day;
    });

    let dayCounts = _.map(days, (dayData,key) => {
      let count = _.reduce(dayData, (result,dataPoint) => {
        return result += dataPoint.quantity;
      },0);

      return [ moment(key).startOf('day').utc().valueOf(), startingCount -= count ];
    });

    return dayCounts;
  }
}

export default InventoryProjectionService;
