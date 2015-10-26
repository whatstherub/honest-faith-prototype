class ProductProjectionListDirective {
  constructor() {
    this.scope = {};
    this.templateUrl = 'js/common/components/inventory/product_projection_list.template.html'
    this.controller = 'ProductProjectionListController';
    this.controllerAs = 'vm';
    this.bindToController = {
      atRiskProducts: '='
    }
  }

  link(scope,element,attrs,controllers) {
  static builder() {
    return new ProductProjectionListDirective();
  }
}

export default ProductProjectionListDirective;
