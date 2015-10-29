class ProductInventoryRiskOverTimeChartService {
	produceChartConfig(config = {}) {
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
    },config);
	}
}

export default ProductInventoryRiskOverTimeChartService;