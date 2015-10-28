import helloModule from 'app.hello';
import inventoryModule from 'common.components.inventory';
import productProjectionSummaryModule from 'common.components.inventory.product_projection_summary';
import productProjectionDetailModule from 'common.components.inventory.product_projection_detail';

var moduleName = 'root';

angular.module(moduleName, [
  'ngAnimate', 'ngSanitize', 'templates', 'ui.router',
  'highcharts-ng',
  helloModule, inventoryModule,
  productProjectionSummaryModule, productProjectionDetailModule
]);

export default moduleName;
