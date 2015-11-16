class InventoryProjectionTweaksDirective {
  constructor() {
    this.scope = {};
    this.controller = 'InventoryProjectionTweaksController';
    this.controllerAs = 'vm';
    this.templateUrl = 'js/common/components/inventory/inventory_projection_tweaks_display.template.html';
  }

  static builder() {
    return new InventoryProjectionTweaksDirective();
  }
}

export default InventoryProjectionTweaksDirective;
