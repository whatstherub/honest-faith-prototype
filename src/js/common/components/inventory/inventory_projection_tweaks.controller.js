class InventoryProjectionTweaksController {
  constructor($scope,$rootScope,AtRiskService,SupplyAndDemandHistoryService) {
    this.$scope = $scope;
    this.$rootScope = $rootScope;

    this.atRiskService = AtRiskService;
    this.supplyAndDemandHistoryService = SupplyAndDemandHistoryService;

    this.tweakProduct = {};

    this.tweakEvent = {};

    this.tweaksOptions = {
      type: [ 'supply', 'demand' ],
      channel: [ 'ecom', 'wholesale', 'retail' ],
      source: [ 'jde', 'www', 'assumption' ],
      customer: [ 'shop', 'bundle', 'vip' ]
    }

    this.tweaksPrototype = {
      variability: {

      },
      demand: {

      },
      events: {
        supply: {},
        demand: {}
      }
    };

    this.watchProductSelection();
    this.populateProducts();
  }

  addNewEvent() {
    console.log("Adding", this.tweakEvent);

    this.supplyAndDemandHistoryService.addTweak(this.tweakEvent);

    this.tweakEvent = {};

    this.broadcastUpdate();
  }

  updateSelectedProduct(product) {
    console.warn("Updating selected product:", product);
    this.tweakEvent = {
      product: product
    };
  }

  watchProductSelection() {
    this.$scope.$watch( () => {
      return this.tweakProduct.selected;
    }, (newValue) => {
      this.updateSelectedProduct(newValue);
    });
  }

  populateProducts() {
    return this.atRiskService.getAtRiskProducts().then( (products) => {
      this.products = products;
      this.tweaks   = {};

      _.each( this.products, (p) => {

      });
    });
  }

  updateVariabilityForProduct( product, type, variability ) {
    this.supplyAndDemandHistoryService.updateVariability( product, {
      type: variability
    });

    this.broadcastUpdate();
  }

  broadcastUpdate() {
    this.$rootScope.$broadcast('inventory-tweaks-updated', {

    });
  }
}

export default InventoryProjectionTweaksController;
