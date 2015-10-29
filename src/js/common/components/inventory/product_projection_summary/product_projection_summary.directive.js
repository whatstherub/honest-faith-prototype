class ProductProjectionSummaryDirective {
  constructor() {
    Object.assign({
      scope: {};
      templateUrl: 'js/common/components/inventory/product_projection_summary/product_projection_summary.template.html'
      controller: 'ProductProjectionSummaryController';
      controllerAs: 'vm';
      bindToController: {
        product: '=',
        handleSelection: '&'
      }  
    },this);
  }

  static builder() {
    return new ProductProjectionSummaryDirective();
  }
}

export default ProductProjectionSummaryDirective;
