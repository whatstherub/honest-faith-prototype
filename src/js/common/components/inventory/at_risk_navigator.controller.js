class AtRiskNavigatorController {
  constructor($scope,$aside) {
    this.$scope = $scope;
    this.$aside = $aside;

    this.tweaksDisplayed = false;
    this.atRiskProducts = [];
  }

  updateSelectedProducts(products) {
    console.warn("vm updating products");
    this.atRiskProducts.length = 0;

    _.each(products, (p) => {
      this.atRiskProducts.push(p);
      return true;
    });
  }

  collapseTweaks() {

  }

  expandTweaks() {
    let tweaks = this.$aside({
      title: 'Tweaks',
      templateUrl: 'js/common/components/inventory/inventory_projection_tweaks.template.html'
    });

    tweaks.$promise.then( () => {
      tweaks.show();
    });
  }
  toggleTweaks() {
    return this.tweaksDisplayed ? this.collapseTweaks() : this.expandTweaks();
  }
}

export default AtRiskNavigatorController;
