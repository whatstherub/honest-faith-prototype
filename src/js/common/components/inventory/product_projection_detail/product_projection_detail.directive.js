class ProductProjectionDetailDirective {
  constructor() {
    Object.assign({
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
