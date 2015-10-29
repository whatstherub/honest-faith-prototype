class ProductProjectionSummaryListDirective {
  constructor() {
    Object.assign(this,{
      scope: {},
      templateUrl: 'js/common/components/inventory/product_projection_summary/product_projection_summary_list.template.html',
      controller: 'ProductProjectionSummaryListController',
      controllerAs: 'vm',
      bindToController: {
        products: '=',
        handleSelection: '&'
      }
    });
  }

  static builder() {
    return new ProductProjectionSummaryListDirective();
  }
}

export default ProductProjectionSummaryListDirective;
