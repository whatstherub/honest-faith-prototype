class AtRiskNavigatorController {
  constructor($scope,$aside,$q,AtRiskService,InventoryProjectionService,SupplyAndDemandHistoryService) {
    Object.assign(this,{
      $scope, $aside, $q,
      atRiskService: AtRiskService,
      inventoryProjectionService: InventoryProjectionService,
      supplyAndDemandHistoryService: SupplyAndDemandHistoryService
    });

    this.startDate = moment().subtract(7, 'days');
    this.endDate = moment().add(31, 'days');

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

    return atRiskProductsLoaded.then( products => {
      this.analyzeProducts(products).then( projections => {
        this.processAtRiskProducts(products);
      });
    });
  }

  calculateProjections( product ) {
    let historyLoaded = this.supplyAndDemandHistoryService.getHistoryForProduct(
      product,
      this.startDate,
      this.endDate
    );

    return historyLoaded.then( (history) => {
      return this.inventoryProjectionService.calculateProjections(
        product,
        history
      );
    });
  }

  analyzeProducts( products ) {
    return this.$q.all( products.map( (product) => {
      return this.calculateProjections(product).then( (projection) => {
        product.projection = projection;
        console.warn("analysis complete:", product.projection);
      });
    }));
  }

  processAtRiskProducts( products ) {
    this.products = products;

    return this.products;
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
