class AtRiskNavigatorController {
  constructor($scope,$aside,AtRiskService) {
    Object.assign(this,{
      $scope, $aside,
      atRiskService: AtRiskService
    });

    this.tweaksDisplayed = false;
    this.atRiskProducts = [];

    this.loadAtRiskProducts();
  }

  updateSelectedProducts(products) {
    this.atRiskProducts.length = 0;

    _.each(products, (p) => {
      this.atRiskProducts.push(p);
      return true;
    });
  }

  collapseTweaks() {

  }

  loadAtRiskProducts() {
    let atRiskProductsLoaded = this.atRiskService.getAtRiskProducts();

    return atRiskProductsLoaded.then(products => this.processAtRiskProducts(products));
  }

  processAtRiskProducts( products ) {
    this.products = products;
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
