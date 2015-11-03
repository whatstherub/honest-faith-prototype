class InventoryProjectionTweaksController {
  constructor($scope,$rootScope,AtRiskService,TweaksService) {
    this.$scope = $scope;
    this.$rootScope = $rootScope;

    this.atRiskService = AtRiskService;
    this.tweaksService = TweaksService;

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

    this.tweakEvent.date = moment(this.tweakEvent.date).format("MM/DD/YYYY");

    console.log("adding:", this.tweakEvent);

    this.tweaksService.addTweak(this.tweakEvent);

    this.tweakEvent = {};
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

      _.each( this.products, (p) => {

      });
    });
  }

  updateVariabilityForProduct( product, type, variability ) {
    this.tweaksService.updateVariability( product, {
      type: variability
    });

    this.broadcastUpdate();
  }
}

export default InventoryProjectionTweaksController;
