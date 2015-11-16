class ProductProjectionChartDirective {
  constructor() {
    Object.assign(this, {
      scope: {},
      controller: 'ProductProjectionChartController',
      controllerAs: 'vm',
      bindToController: {
        product: '=',
        history: '='
      },
      template: `<highchart config="vm.chartConfig"></highchart>`
    });
  }

  static builder() {
    return new ProductProjectionChartDirective();
  }
}

export default ProductProjectionChartDirective;
