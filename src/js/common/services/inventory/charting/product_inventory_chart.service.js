class ProductInventoryChartService {
  constructor(InventoryProjectionService) {
    this.inventoryProjectionService = InventoryProjectionService;
  }

  calculateTotalDemandByDay(product,history) {
    return this.inventoryProjectionService
      .calculateTotalDemandByDay(product,history);
  }

  detectOutOfStock( product, dayCounts, history ) {
    let outOfStockDay = _.find( dayCounts, (c) => c[1] <= 0 );

    if( outOfStockDay ) {
      console.warn("found OOS", outOfStockDay[0]);
      return [{ x: outOfStockDay[0], title: "Out of stock"}];
    }

    return [];
  }

  detectTweakAdditions(product, dayCounts, history) {
    console.warn(product, dayCounts, history);

    let tweakAdditions = history.filter( (h) => (h.nature == 'tweak') );

    return tweakAdditions.map( (tweak) => {
      console.warn("tweak day:", tweak.day);
      return {
        x: tweak.day.valueOf(),
        title: this.formatTweakForDisplay(tweak)
      };
    });
  }

  formatTweakForDisplay(tweak) {
    let direction = tweak.type == 'supply' ? '+' : '-';

    return `${direction}${tweak.quantity}`;
  }

  collectWarnings( product, dayCounts, history ) {
    return _.flatten([
      this.detectOutOfStock( product, dayCounts, history ),
      this.detectTweakAdditions( product, dayCounts, history )
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

    let data = this.collectWarnings( product, dayCounts, history );

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
        },
        tooltip: {
          shared: true
        }
      },{
        title: {
          text: 'inventory'
        },
        tooltip: {
          shared: true
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
