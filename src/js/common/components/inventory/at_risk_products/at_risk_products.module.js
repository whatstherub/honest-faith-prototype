import AtRiskProductsOverTimeDirective from 'common.components.inventory.at_risk_products.at_risk_products_over_time.directive';
import AtRiskProductsOverTimeController from 'common.components.inventory.at_risk_products.at_risk_products_over_time.controller';

import AtRiskNavigatorDirective from 'common.components.inventory.at_risk_products.at_risk_navigator.directive';
import AtRiskNavigatorController from 'common.components.inventory.at_risk_products.at_risk_navigator.controller';

var moduleName = 'common.components.inventory.at_risk_products';

angular.module(moduleName, [])
  .directive('atRiskProductsOverTime', AtRiskProductsOverTimeDirective.builder)
  .controller('AtRiskProductsOverTimeController', AtRiskProductsOverTimeController)

  .controller('AtRiskNavigatorController', AtRiskNavigatorController)
  .directive('atRiskNavigator', AtRiskNavigatorDirective.builder);

export default moduleName;
