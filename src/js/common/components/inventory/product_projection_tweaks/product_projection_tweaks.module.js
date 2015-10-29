import TweakEventCreationDisplayDirective   from 'common.components.inventory.product_projection_tweaks.tweak_event_creation_display.directive';
import TweakEventCreationDisplayController  from 'common.components.inventory.product_projection_tweaks.tweak_event_creation_display.controller';

import ProductProjectionTweakListDirective  from 'common.components.inventory.product_projection_tweaks.product_projection_tweak_list.directive';
import ProductProjectionTweakListController from 'common.components.inventory.product_projection_tweaks.product_projection_tweak_list.controller';

var moduleName = 'common.components.inventory.product_projection_tweaks';

angular.module(moduleName, [])
  .directive('tweakEventCreationDisplay', TweakEventCreationDisplayDirective.builder)
  .controller('TweakEventCreationDisplayController', TweakEventCreationDisplayController)

  .directive('productProjectionTweakList', ProductProjectionTweakListDirective.builder)
  .controller('ProductProjectionTweakListController', ProductProjectionTweakListController);


export default moduleName;
