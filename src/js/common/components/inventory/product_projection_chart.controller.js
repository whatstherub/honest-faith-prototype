class ProductProjectionChartController {
  constructor($scope, InventoryProjectionService, ProductInventoryChartService) {
    this.$scope = $scope;
    this.inventoryProjectionService = InventoryProjectionService;
    this.productInventoryChartService = ProductInventoryChartService;

    this.chartConfig = this.produceChartConfig();

    this.seriesIndexes = {
      inventory: 10,
      inventoryWarnings: 11
    };

    this.watchChartDataUpdates();
  }

  watchChartDataUpdates() {
    this.$scope.$watch( () => (this.history), (newVal) => {
      if( newVal ) {
        this.updateChartSeriesData(this.history);
      }
    })
  }

  synthesizeFlagSeries(history) {
    let opts = { zIndex: this.seriesIndexes.inventoryWarnings };

    return this.productInventoryChartService
      .synthesizeFlagSeries(this.product, history, opts);
  }

  calculateTotalDemandByDay(history) {
    return this.inventoryProjectionService
      .calculateTotalDemandByDay(this.product,history);
  }

  synthesizeInventorySeries(history) {
    let opts = { zIndex: this.seriesIndexes.inventory };

    return this.productInventoryChartService
      .synthesizeInventorySeries(this.product, history, opts);
  }

  synthesizeHistorySeries(history) {
    let groups = _.groupBy(history, 'source');

    return _.map( groups, (group,name) => {
      return {
        type: 'area',
        name: name,
        data: this.convertHistoryToSeriesData(group)
      }
    });
  }

  updateChartSeriesData( history ) {
    console.warn("update",history);
    let newSeries = _.flatten([
      this.synthesizeHistorySeries(history),
      this.synthesizeInventorySeries(history),
      this.synthesizeFlagSeries(history)
    ]);

    _.each( newSeries, (s,index) => {
      s.color = Highcharts.Color('#CCCCCC').brighten((index - 4)/10).get();
    });

    this.chartConfig.series = newSeries;
  }

  convertHistoryToSeriesData(history) {
    return history
      .filter( (h) => (h.type == 'demand') )
      .map( (h) => ([ h.day.utc().valueOf(), h.quantity ]) );
  }

  produceChartConfig() {
    return this.productInventoryChartService.produceChartConfig();
  }
}

export default ProductProjectionChartController;
