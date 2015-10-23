class AtRiskProductsOverTimeController {

  constructor($scope,$log,AtRiskService) {
    this.$log   = $log;
    this.$scope = $scope;

    $scope.chartConfig = this.chartConfig = this.produceChartConfig();

    let atRiskProductsLoaded = AtRiskService.getAtRiskProducts();

    atRiskProductsLoaded.then(products => this.processAtRiskProducts(products));
  }

  processAtRiskProducts( atRiskProducts ) {

    this.$log.warn("at risk:", atRiskProducts);

    var firstDay = moment().subtract(2, 'days');
    var lastDay  = moment().add(14, 'days');
    var range = moment.range(firstDay,lastDay);

    let riskRange = this.produceRiskRangeByDay(atRiskProducts,range);

    this.$log.debug(riskRange);

    var atRiskSeries = riskRange.map( (risk) => {
      return {
        x: moment.utc(risk.when).valueOf(),
        y: risk.atRisk,
        userData: risk
      };
    });

    var notAtRiskSeries = riskRange.map( (risk) => {
      return { x: moment.utc(risk.when).valueOf(), y: -risk.notAtRisk };
    });

    this.updateChartSeriesData( atRiskSeries, notAtRiskSeries );
  }

  produceRiskRangeByDay( atRiskProducts, range ) {
    var riskRange = [];

    range.by('days', (day) => {
      var atRiskByDay = _.reduce(atRiskProducts, (result,product) => {
        let atRiskDate = moment(product.atRisk, "M/D/YYYY");

        if( ! result.has(day) ) {
          result.set(day, { when: day, atRisk: 0, notAtRisk: 0, atRiskProducts: [] } );
        }

        var dayData = result.get(day);

        if( atRiskDate.isBefore(day) || atRiskDate.isSame(day) ) {
          dayData.atRisk++;
          dayData.atRiskProducts.push(product);
        } else {
          dayData.notAtRisk++;
        }
        return result;
      }, new Map());

      riskRange.push( atRiskByDay.get(day) );

      return true;
    });


    return riskRange;
  }

  handleAtRiskBarSelection(event, series) {
    this.$scope.$apply( () => {
      this.handleProductsSelection({
        selectedProducts: event.point.userData.atRiskProducts
      });
    });
  }

  updateChartSeriesData( atRiskSeries, notAtRiskSeries ) {
    let self = this;

    this.chartConfig.series = [{
      cursor: 'pointer',
      name: 'At Risk',
      data: atRiskSeries,
      color: '#FF0000',
      point: {
        events: {
          click: function (event) {
            self.handleAtRiskBarSelection(event,this);
          }
        }
      }
    },{
      cursor: 'pointer',
      name: 'Not at risk',
      data: notAtRiskSeries,
      color: '#CCCCCC'
    }];
  }

  produceChartConfig() {
    return {
      options: {
        chart: {
          type: 'column'
        },
        plotOptions: {
          series: {
            stacking: 'normal'
          }
        },
        exporting: {
          enabled: false
        }
      },
      xAxis: [{
        type: 'datetime',
        reversed: false
      },{
        type: 'datetime',
        opposite: true,
        reversed: false,
        linkedTo: 0

      }],
      yAxis: {
        title: {
          text: 'number of products'
        },
        labels: {
          formatter: function () {
            return Math.abs(parseInt(this.value));
          }
        }
      },
      title: {
        text: "At Risk Products"
      }
    };
  }
}

export default AtRiskProductsOverTimeController;
