class ProductProjectionSummaryDirective {
  constructor() {
    Object.assign(this,{
      scope: {},
      templateUrl: 'js/common/components/inventory/product_projection_summary/product_projection_summary.template.html',
      controller: 'ProductProjectionSummaryController',
      controllerAs: 'vm',
      bindToController: {
        product: '=',
        handleSelection: '&'
      }
    });
  }

  static builder() {
    return new ProductProjectionSummaryDirective();
  }
}

export default ProductProjectionSummaryDirective;
