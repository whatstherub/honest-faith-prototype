class ProductProjectionSummaryDirective {
  constructor() {
    this.scope = {};
    this.templateUrl = 'js/common/components/inventory/product_projection_summary/product_projection_summary.template.html'
    this.controller = 'ProductProjectionSummaryController';
    this.controllerAs = 'vm';
    this.bindToController = {
      product: '='
    }
  }

  link(scope,element,attrs,controllers) {
  static builder() {
    return new ProductProjectionSummaryDirective();
  }
}

export default ProductProjectionSummaryDirective;
