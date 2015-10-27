import helloModule from 'app.hello';
import inventoryModule from 'common.components.inventory'
import productProjectionSummaryModule from 'common.components.inventory.product_projection_summary'

var moduleName = 'root';

angular.module(moduleName, [
  'ngAnimate', 'ngSanitize', 'templates', 'ui.router',
  'highcharts-ng',
  helloModule, inventoryModule, productProjectionSummaryModule
]);

export default moduleName;
