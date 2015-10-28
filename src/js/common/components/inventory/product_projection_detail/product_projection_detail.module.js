import ProductProjectionDetailDirective from 'common.components.inventory.product_projection_detail.product_projection_detail.directive';
import ProductProjectionDetailController from 'common.components.inventory.product_projection_detail.product_projection_detail.controller';

var moduleName = 'common.components.inventory.product_projection_detail';

angular.module(moduleName, ['ngAnimate','mgcrea.ngStrap', 'ui.select'])
  .directive('productProjectionDetail', ProductProjectionDetailDirective.builder)
  .controller('ProductProjectionDetailController', ProductProjectionDetailController);


export default moduleName;
