import helloModule from 'app.hello';
import inventoryModule from 'common.components.inventory'

var moduleName = 'root';

angular.module(moduleName, [
  'ngAnimate', 'ngSanitize', 'templates', 'ui.router',
  'highcharts-ng',
  helloModule, inventoryModule
]);

export default moduleName;
