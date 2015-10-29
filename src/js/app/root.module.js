import helloModule from 'app.hello';
import inventoryModule from 'common.components.inventory';
import productProjectionSummaryModule from 'common.components.inventory.product_projection_summary';
import productProjectionDetailModule from 'common.components.inventory.product_projection_detail';
import productProjectionTweaksModule from 'common.components.inventory.product_projection_tweaks';

var moduleName = 'root';

angular.module(moduleName, [
  'ngAnimate', 'ngSanitize', 'templates', 'ui.router',
  'highcharts-ng',
  helloModule, inventoryModule,
  productProjectionSummaryModule, productProjectionDetailModule,
  productProjectionTweaksModule
]);

export default moduleName;
