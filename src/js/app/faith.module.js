import inventoryModule from 'common.components.inventory';
import inventoryServicesModule from 'common.services.inventory';
import productProjectionModule from 'common.components.inventory.product_projection';
import productProjectionSummaryModule from 'common.components.inventory.product_projection_summary';
import productProjectionDetailModule from 'common.components.inventory.product_projection_detail';
import productProjectionTweaksModule from 'common.components.inventory.product_projection_tweaks';
import atRiskProductsModule from 'common.components.inventory.at_risk_products';

var moduleName = 'faith';

angular.module(moduleName, [
  'ngAnimate', 'ngSanitize', 'templates', 'ui.router',
  'highcharts-ng',
  inventoryModule, inventoryServicesModule, productProjectionModule,
  productProjectionSummaryModule, productProjectionDetailModule,
  productProjectionTweaksModule, atRiskProductsModule
]);

export default moduleName;
