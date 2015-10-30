class ProductInventoryChartService {
  constructor(InventoryProjectionService) {
    this.inventoryProjectionService = InventoryProjectionService;
  }

  calculateTotalDemandByDay(product,history) {
    return this.inventoryProjectionService
      .calculateTotalDemandByDay(product,history);
  }

  detectOutOfStock( dayCounts ) {
    let outOfStockDay = _.find( dayCounts, (c) => c[1] <= 0 );

    if( outOfStockDay ) {
      console.warn("found OOS");
      return [{ x: outOfStockDay[0], title: "Out of stock"}];
    }

    return [];
  }

  collectWarnings( dayCounts ) {
    return _.flatten([
      this.detectOutOfStock( dayCounts )
    ]);
  }

  produceSeries(product, history, opts = {}) {
    let series = [];

    if( opts.inventory !== false ) {
      let { inventoryOpts = {} } = opts.inventory;

      series.push( this.synthesizeInventorySeries(product, history, inventoryOpts) );
    }

    if( opts.flags !== false ) {
      let { flagsOpts = {} } = opts.flags;

      series.push( this.synthesizeFlagSeries(product, history, flagsOpts) );
    }

    return series;
  }

  synthesizeFlagSeries(product, history, opts = {}) {
    let dayCounts = this.calculateTotalDemandByDay(product, history);

    let data = this.collectWarnings( dayCounts );

    return Object.assign({
      id: 'inventory-warnings',
      name: 'inventory warnings',
      type: 'flags',
      shape: 'squarepin',
      onSeries: 'inventory',
      data: data
    }, opts);
  }

  synthesizeInventorySeries(product, history, opts = {}) {
    let dayCounts = this.calculateTotalDemandByDay(product, history);
    let daySeries = _.sortBy( dayCounts, (c) => ( c[0] ) );

    return Object.assign({
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
    }, opts);
  }

  produceChartConfig(config = {}) {
    return Object.assign({
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
    }, config);
  }
}

export default ProductInventoryChartService;
