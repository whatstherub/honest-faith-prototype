class ProductProjectionDetailDirective {
  constructor() {
    Object.assign(this,{
      scope: {},
      controller: 'ProductProjectionDetailController',
      controllerAs: 'vm',
      bindToController: {
        product: '='
      }
    });
  }

  static builder() {
    return new ProductProjectionDetailDirective();
  }
}

export default ProductProjectionDetailDirective;
