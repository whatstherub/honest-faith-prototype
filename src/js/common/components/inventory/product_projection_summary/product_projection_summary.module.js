import ProductProjectionSummaryDirective from 'common.components.inventory.product_projection_summary.product_projection_summary.directive';
import ProductProjectionSummaryController from 'common.components.inventory.product_projection_summary.product_projection_summary.controller';

import ProductProjectionSummaryListDirective from 'common.components.inventory.product_projection_summary.product_projection_summary_list.directive';
import ProductProjectionSummaryListController from 'common.components.inventory.product_projection_summary.product_projection_summary_list.controller';

var moduleName = 'common.components.inventory.product_projection_summary';

angular.module(moduleName, ['ngAnimate','mgcrea.ngStrap', 'ui.select'])
  .directive('productProjectionSummary', ProductProjectionSummaryDirective.builder)
  .controller('ProductProjectionSummaryController', ProductProjectionSummaryController)
  
  .directive('productProjectionSummaryList', ProductProjectionSummaryListDirective.builder)
  .controller('ProductProjectionSummaryListController', ProductProjectionSummaryListController)
  


export default moduleName;
