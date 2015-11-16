class ProductProjectionListDirective {
  constructor() {
    Object.assign(this, {
      scope: {},
      controller: 'ProductProjectionListController',
      controllerAs: 'vm',
      bindToController: {
        atRiskProducts: '='
      },
      templateUrl: 'js/common/components/inventory/product_projection/product_projection_list.template.html'
    });
  }

  static builder() {
    return new ProductProjectionListDirective();
  }
}

export default ProductProjectionListDirective;
