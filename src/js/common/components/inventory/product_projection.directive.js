class ProductProjectionDirective {
  constructor() {
    this.scope = {};
    this.controller = 'ProductProjectionController';
    this.controllerAs = 'vm';
    this.templateUrl = 'js/common/components/inventory/product_projection.template.html'
    this.bindToController = {
      product: '='
    }
  }
  static builder() {
    return new ProductProjectionDirective();
  }
}

export default ProductProjectionDirective;
