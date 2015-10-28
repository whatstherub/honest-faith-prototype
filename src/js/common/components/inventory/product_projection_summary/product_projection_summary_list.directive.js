class ProductProjectionSummaryListDirective {
  constructor() {
    this.scope = {};
    this.templateUrl = 'js/common/components/inventory/product_projection_summary/product_projection_summary_list.template.html'
    this.controller = 'ProductProjectionSummaryListController';
    this.controllerAs = 'vm';
    this.bindToController = {
      products: '=',
      handleSelection: '&'
    }
  }

  static builder() {
    return new ProductProjectionSummaryListDirective();
  }
}

export default ProductProjectionSummaryListDirective;
