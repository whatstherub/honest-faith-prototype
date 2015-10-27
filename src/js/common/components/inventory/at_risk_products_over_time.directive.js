class AtRiskProductsOverTimeDirective {

  constructor() {
    this.scope = {};
    this.templateUrl  = 'js/common/components/inventory/at_risk_products_over_time.template.html';
    this.controller   = 'AtRiskProductsOverTimeController';
    this.controllerAs = 'vm';
    this.bindToController = {
      chartConfig: '=',
      products: '=',
      handleProductsSelection: '&'
    }
  }

  static builder() {
    return new AtRiskProductsOverTimeDirective();
  }

}

export default AtRiskProductsOverTimeDirective;
