class ProductProjectionChartController {
  constructor($scope) {
    this.$scope = $scope;
    this.chartConfig = this.produceChartConfig();

    this.watchChartDataUpdates();
  }

  watchChartDataUpdates() {
    this.$scope.$watch( () => { return this.history }, (newVal) => {
      console.warn("updating chart");
      this.updateChartSeriesData(this.history);
    })
  }

  synthesizeInventorySeries(history) {
    let startingCount = 55000;

    let days = _.groupBy(history, (h) => {
      return h.day;
    });

    let dayCounts = _.map(days, (dayData,key) => {
      let count = _.reduce(dayData, (result,dataPoint) => {
        return result += dataPoint.demand;
      },0);

      return [ moment(key).utc().valueOf(), startingCount -= count ];
    });

    let daySeries = _.sortBy( dayCounts, (c) => ( c[0] ) );


    console.warn('day counts', daySeries);
    console.warn('history',history);
    console.warn('days',days);

    return {
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

    _.each( newSeries, (s,index) => {
      s.color = Highcharts.Color('#CCCCCC').brighten((index - 4)/10).get();
    });

    this.chartConfig.series = newSeries;
  }

  convertHistoryToSeriesData(history) {
    return history.map( (h) => {
      return [ h.day.utc().valueOf(), h.demand ];
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
