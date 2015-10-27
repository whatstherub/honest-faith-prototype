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
      this.updateChartSeriesData(this.history);
    })
  }

  synthesizeFlagSeries(history) {
    let opts = { zIndex: this.seriesIndexes.inventoryWarnings };

    return this.productInventoryChartService
      .synthesizeFlagSeries(history, opts);
  }

  calculateTotalDemandByDay(history) {
    return this.inventoryProjectionService.calculateTotalDemandByDay(history);
  }

  synthesizeInventorySeries(history) {
    let opts = { zIndex: this.seriesIndexes.inventory };

    return this.productInventoryChartService
      .synthesizeInventorySeries(history, opts);
  }

  updateChartSeriesData( history ) {
    let self = this;

    let groups = _.groupBy(history, 'source');

    let newSeries = _.map( groups, (group,name) => {
      return {
        type: 'area',
        name: name,
        data: this.convertHistoryToSeriesData(group)
      }
    });

    newSeries.push( this.synthesizeInventorySeries(history) );
    newSeries.push( this.synthesizeFlagSeries(history) );

    _.each( newSeries, (s,index) => {
      s.color = Highcharts.Color('#CCCCCC').brighten((index - 4)/10).get();
    });

    this.chartConfig.series = newSeries;
  }

  convertHistoryToSeriesData(history) {
    return history.map( (h) => {
      return [ h.day.utc().valueOf(), h.quantity ];
    });
  }

  produceChartConfig() {
    return this.productInventoryChartService.produceChartConfig();
  }
}

export default ProductProjectionChartController;
