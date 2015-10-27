class ProductInventoryChartService {
  constructor(InventoryProjectionService) {
    this.inventoryProjectionService = InventoryProjectionService;
  }

  calculateTotalDemandByDay(history) {
    return this.inventoryProjectionService.calculateTotalDemandByDay(history);
  }

  synthesizeInventorySeries(history, opts = {}) {
    let dayCounts = this.calculateTotalDemandByDay(history);
    let daySeries = _.sortBy( dayCounts, (c) => ( c[0] ) );

    return {
      id: 'inventory',
      name: 'inventory',
      type: 'line',
      yAxis: 1,
      lineWidth: 2,
      lineColor: '#000000',
      marker: {
        enabled: false
      },
      zones: [{
        value: 0,
        color: '#FF0000'
      }, {
        color: '#CCCCCC',
        lineWidth: 5
      }],
      data: daySeries
    }
  }
}

export default ProductInventoryChartService;
