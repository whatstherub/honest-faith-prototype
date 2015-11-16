import LoadingDirective from 'common.components.inventory.loading.directive';

import inventoryServicesModule from 'common.services.inventory';
import productProjectionModule from 'common.components.inventory.product_projection';
import productProjectionSummaryModule from 'common.components.inventory.product_projection_summary';
import productProjectionDetailModule from 'common.components.inventory.product_projection_detail';
import productProjectionTweaksModule from 'common.components.inventory.product_projection_tweaks';
import atRiskProductsModule from 'common.components.inventory.at_risk_products';

var moduleName = 'common.components.inventory';

angular.module(moduleName, [
  'ngAnimate','mgcrea.ngStrap', 'ui.select', 'highcharts-ng',
  inventoryServicesModule, productProjectionModule,
  productProjectionSummaryModule, productProjectionDetailModule,
  productProjectionTweaksModule, atRiskProductsModule
])
  .directive('loading', LoadingDirective.builder);

export default moduleName;
