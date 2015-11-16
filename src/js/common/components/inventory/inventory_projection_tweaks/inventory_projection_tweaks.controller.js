class InventoryProjectionTweaksController {
  constructor($scope,$rootScope,$log,AtRiskService,TweaksService) {
    Object.assign(this, {
      $scope, $rootScope, $log,
      atRiskService: AtRiskService,
      tweaksService: TweaksService
    });
    
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

  preProcessTweak(tweak) {
    tweak.date = moment(this.tweakEvent.date).format("MM/DD/YYYY");

    return tweak;
  }

  addNewEvent() {
    this.tweaksService.addTweak(
      this.preProcessTweak(this.tweakEvent)
    );

    this.tweakEvent = {};
  }

  updateSelectedProduct(product) {
    this.$log.warn("Updating selected product:", product);
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
