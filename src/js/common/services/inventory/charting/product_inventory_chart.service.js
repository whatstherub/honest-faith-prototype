class ProductInventoryChartService {
  constructor(InventoryProjectionService) {
    this.inventoryProjectionService = InventoryProjectionService;
  }

  calculateTotalDemandByDay(history) {
    return this.inventoryProjectionService.calculateTotalDemandByDay(history);
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



  synthesizeFlagSeries(history, opts = {}) {
    let dayCounts = this.calculateTotalDemandByDay(history);

    var data = this.collectWarnings( dayCounts );

    return Object.assign({
      id: 'inventory-warnings',
      name: 'inventory warnings',
      type: 'flags',
      shape: 'squarepin',
      onSeries: 'inventory',
      data: data
    }, opts);
  }

  synthesizeInventorySeries(history, opts = {}) {
    let dayCounts = this.calculateTotalDemandByDay(history);
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

export default ProductInventoryChartService;
