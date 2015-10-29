class ProductProjectionDetailDirective {
  constructor() {
    Object.assign({
      scope: {},
      controller: 'ProductProjectionDetailController',
      controllerAs: 'vm',
      bindToController: {
        product: '='
      }
    }, this);
  }

  static builder() {
    return new ProductProjectionDetailDirective();
  }
}

export default ProductProjectionDetailDirective;
