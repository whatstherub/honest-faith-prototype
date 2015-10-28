class ProductProjectionChartDirective {
  constructor() {
    this.scope = {};
    this.controller   = 'ProductProjectionChartController';
    this.controllerAs = 'vm';
    this.template     = `<highchart config="vm.chartConfig"></highchart>`;
    this.bindToController = {
      product: '=',
      history: '='
    }
  }

  static builder() {
    return new ProductProjectionChartDirective();
  }
}

export default ProductProjectionChartDirective;
