import AtRiskProductsOverTimeDirective from 'common.components.inventory.at_risk_products_over_time.directive';
import AtRiskProductsOverTimeController from 'common.components.inventory.at_risk_products_over_time.controller';

import AtRiskService from 'common.services.inventory.atrisk.service';
import InventoryProjectionService from 'common.services.inventory.inventory_projection.service';
import ProductsService from 'common.services.inventory.products.service';
import SupplyAndDemandHistoryService from 'common.services.inventory.supply_and_demand_history.service';
import InventoryDetailsService from 'common.services.inventory.inventory_details.service';

import ProductProjectionController from 'common.components.inventory.product_projection.controller';
import ProductProjectionDirective  from 'common.components.inventory.product_projection.directive';

import AtRiskNavigatorController from 'common.components.inventory.at_risk_navigator.controller';
import AtRiskNavigatorDirective  from 'common.components.inventory.at_risk_navigator.directive';

import ProductProjectionListDirective from 'common.components.inventory.product_projection_list.directive';
import ProductProjectionListController from 'common.components.inventory.product_projection_list.controller';

import ProductProjectionChartDirective from 'common.components.inventory.product_projection_chart.directive';
import ProductProjectionChartController from 'common.components.inventory.product_projection_chart.controller';


var moduleName = 'common.components.inventory';

angular.module(moduleName, [])
  .directive('atRiskProductsOverTime', AtRiskProductsOverTimeDirective.builder)
  .controller('AtRiskProductsOverTimeController', AtRiskProductsOverTimeController)

  .service('ProductsService', ProductsService)
  .service('InventoryProjectionService', InventoryProjectionService)
  .service('AtRiskService', AtRiskService)
  .service('SupplyAndDemandHistoryService', SupplyAndDemandHistoryService)
  .service('InventoryDetailsService', InventoryDetailsService)
  
  .controller('ProductProjectionController', ProductProjectionController )
  .directive('productProjection', ProductProjectionDirective.builder)

  .controller('ProductProjectionListController', ProductProjectionListController )
  .directive('productProjectionList', ProductProjectionListDirective.builder )

  .controller('ProductProjectionChartController', ProductProjectionChartController )
  .directive('productProjectionChart', ProductProjectionChartDirective.builder )


  .controller('AtRiskNavigatorController', AtRiskNavigatorController)
  .directive('atRiskNavigator', AtRiskNavigatorDirective.builder);

export default moduleName;
