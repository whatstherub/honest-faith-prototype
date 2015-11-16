import InventoryProjectionTweaksDirective from 'common.components.inventory.inventory_projection_tweaks.inventory_projection_tweaks.directive';
import InventoryProjectionTweaksController from 'common.components.inventory.inventory_projection_tweaks.inventory_projection_tweaks.controller';

var moduleName = 'common.components.inventory.inventory_projection_tweaks';

angular.module(moduleName, [])
  .directive('inventoryProjectionTweaks', InventoryProjectionTweaksDirective.builder)
  .controller('inventoryProjectionTweaksController', InventoryProjectionTweaksController);

export default moduleName;
