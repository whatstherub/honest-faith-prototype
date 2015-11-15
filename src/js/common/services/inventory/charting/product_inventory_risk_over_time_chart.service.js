class ProductInventoryRiskOverTimeChartService {
	produceSeriesConfig(atRiskSeries,notAtRiskSeries,actionHandler) {
		return [{
      cursor: 'pointer',
      name: 'At Risk',
      data: atRiskSeries,
      color: '#FF0000',
      point: {
        events: {
          click: function (event) {
            actionHandler.handleAtRiskBarSelection(event,this);
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

	produceChartConfig(overrides = {}) {
		return Object.assign({
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
    },overrides);
	}
}

export default ProductInventoryRiskOverTimeChartService;
