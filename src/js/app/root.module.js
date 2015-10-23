import helloModule from 'app.hello';
import inventoryModule from 'common.components.inventory'

var moduleName = 'root';

console.warn("HM: ", helloModule);
console.warn("IM: ", inventoryModule);

angular.module(moduleName, [
  'ngAnimate', 'ngSanitize', 'templates', 'ui.router',
  'highcharts-ng',
  helloModule, inventoryModule
]);

export default moduleName;
