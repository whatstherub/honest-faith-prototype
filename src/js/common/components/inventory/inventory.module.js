import LoadingDirective from 'common.components.inventory.loading.directive';

var moduleName = 'common.components.inventory';

angular.module(moduleName, ['ngAnimate','mgcrea.ngStrap', 'ui.select'])
  .directive('loading', LoadingDirective.builder);

export default moduleName;
