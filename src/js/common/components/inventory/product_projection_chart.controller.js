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

  collectWarnings( dayCounts ) {
    var data = [];

    _.find( dayCounts, (c) => {
      if( c[1] <= 0 ) {
        data.push({ x: c[0], title: "Out of stock"});
        console.warn("found OOS");
        return true;
      }
      return false;
    });

    return data;
  }
  
  synthesizeFlagSeries(history) {
    let dayCounts = this.calculateTotalDemandByDay(history);

    var data = this.collectWarnings( dayCounts );

    return {
      zIndex: this.seriesIndexes.inventoryWarnings,
      id: 'inventory-warnings',
      name: 'inventory warnings',
      type: 'flags',
      shape: 'squarepin',
      onSeries: 'inventory',
      data: data
    }
  }

  calculateTotalDemandByDay(history) {
    return this.inventoryProjectionService.calculateTotalDemandByDay(history);
  }

  synthesizeInventorySeries(history) {
    let series = this.productInventoryChartService.synthesizeInventorySeries(history);

    series.zIndex = this.seriesIndexes.inventory;

    return series;
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
    return {
      options: {
        chart: {
          height: 200
        },
        exporting: {
          enabled: false
        },
        tooltip: {
          shared: true
        },
        plotOptions: {
          area: {
            stacking: 'normal'
          }
        },
      },
      xAxis: [{
        type: 'datetime',
        reversed: false
      }],
      yAxis:[{
        title: {
          text: 'demand'
        }
      },{
        title: {
          text: 'inventory'
        },
        opposite: true,
        min: -5000

      }],
      title: {
        text: null
      }
    };
  }
}

export default ProductProjectionChartController;
