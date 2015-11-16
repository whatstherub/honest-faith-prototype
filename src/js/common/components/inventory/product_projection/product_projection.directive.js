class ProductProjectionDirective {
  constructor() {
    Object.assign(this, {
      scope: {},
      controller: 'ProductProjectionController',
      controllerAs: 'vm',
      bindToController: {
        product: '='
      },
      templateUrl: 'js/common/components/inventory/product_projection/product_projection.template.html'
    });
  }
  static builder() {
    return new ProductProjectionDirective();
  }
}

export default ProductProjectionDirective;
