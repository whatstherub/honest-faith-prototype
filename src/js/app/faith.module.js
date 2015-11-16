import inventoryModule from 'common.components.inventory';

var moduleName = 'faith';

angular.module(moduleName, [
  'ngAnimate', 'ngSanitize', 'templates', 'ui.router',
  inventoryModule
]);

export default moduleName;
