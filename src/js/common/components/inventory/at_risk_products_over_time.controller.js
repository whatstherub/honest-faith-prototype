class AtRiskProductsOverTimeController {

  constructor($scope,$log,AtRiskService,ProductInventoryRiskOverTimeChartService) {
    Object.assign(this, {
      $log, $scope,
      atRiskService: AtRiskService,
      productInventoryRiskOverTimeChartService: ProductInventoryRiskOverTimeChartService
    });

    this.chartConfig = this.produceChartConfig();

    this.watchForProductUpdates();
  }

  watchForProductUpdates() {
    this.$scope.$watch( () => (this.products), (newProducts) => {
      if( newProducts ) {
        this.processAtRiskProducts( newProducts );
      }
    });
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
    return this.atRiskService.produceRiskRangeByDay( atRiskProducts, range );
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
    return this.productInventoryRiskOverTimeChartService.produceChartConfig();
  }
}

export default AtRiskProductsOverTimeController;
