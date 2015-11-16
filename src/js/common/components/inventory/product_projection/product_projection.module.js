import ProductProjectionController from 'common.components.inventory.product_projection.product_projection.controller';
import ProductProjectionDirective  from 'common.components.inventory.product_projection.product_projection.directive';

import ProductProjectionListDirective from 'common.components.inventory.product_projection.product_projection_list.directive';
import ProductProjectionListController from 'common.components.inventory.product_projection.product_projection_list.controller';

import ProductProjectionChartDirective from 'common.components.inventory.product_projection.product_projection_chart.directive';
import ProductProjectionChartController from 'common.components.inventory.product_projection.product_projection_chart.controller';

var moduleName = 'common.components.inventory.product_projection';

angular.module(moduleName, [])
  .controller('ProductProjectionController', ProductProjectionController )
  .directive('productProjection', ProductProjectionDirective.builder)

  .controller('ProductProjectionListController', ProductProjectionListController )
  .directive('productProjectionList', ProductProjectionListDirective.builder )

  .controller('ProductProjectionChartController', ProductProjectionChartController )
  .directive('productProjectionChart', ProductProjectionChartDirective.builder );


export default moduleName;
