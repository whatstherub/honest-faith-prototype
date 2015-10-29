/* global moment */
/* global _ */
class SupplyAndDemandHistoryService {

  constructor($q,$timeout,TweaksService) {
    this.$q = $q;
    this.$timeout = $timeout;
    this.tweaksService = TweaksService;

    this.tweaks = [];

    this.estimatedVariability = {
      1: {
        'bundle': 0.15,
        'shop': 0.10,
        'retail': 0.15
      },
      else: {
        'bundle': 0.10,
        'shop': 0.10,
        'retail': 0.10
      }
    };

    this.estimatedDemandAverages = {
      1: {
        'bundle': { channel: 'ecom'   , source: 'bundle', qty: 1000 , type: 'demand' },
        'shop':   { channel: 'ecom'   , source: 'shop'  , qty: 300  , type: 'demand' },
        'retail': { channel: 'retail' , source: 'target', qty: 250  , type: 'demand' }
      },
      332: {
        'bundle': { channel: 'ecom'   , source: 'bundle', qty: 500 , type: 'demand' },
        'shop':   { channel: 'ecom'   , source: 'shop'  , qty: 100  , type: 'demand' },
        'retail': { channel: 'retail' , source: 'target', qty: 50  , type: 'demand' }
      },
      288: {
        'bundle': { channel: 'ecom'   , source: 'bundle', qty: 750 , type: 'demand' },
        'shop':   { channel: 'ecom'   , source: 'shop'  , qty: 150  , type: 'demand' },
        'retail': { channel: 'retail' , source: 'target', qty: 300  , type: 'demand' }
      },
      328: {
        'bundle': { channel: 'ecom'   , source: 'bundle', qty: 400 , type: 'demand' },
        'shop':   { channel: 'ecom'   , source: 'shop'  , qty: 100  , type: 'demand' },
        'retail': { channel: 'retail' , source: 'target', qty: 150  , type: 'demand' }
      },
      203: {
        'bundle': { channel: 'ecom'   , source: 'bundle', qty: 300 , type: 'demand' },
        'shop':   { channel: 'ecom'   , source: 'shop'  , qty: 75  , type: 'demand' },
        'retail': { channel: 'retail' , source: 'target', qty: 10  , type: 'demand' }
      },
      246: {
        'bundle': { channel: 'ecom'   , source: 'bundle', qty: 900 , type: 'demand' },
        'shop':   { channel: 'ecom'   , source: 'shop'  , qty: 100  , type: 'demand' },
        'retail': { channel: 'retail' , source: 'target', qty: 350  , type: 'demand' }
      },
      290: {
        'bundle': { channel: 'ecom'   , source: 'bundle', qty: 500 , type: 'demand' },
        'shop':   { channel: 'ecom'   , source: 'shop'  , qty: 100  , type: 'demand' },
        'retail': { channel: 'retail' , source: 'target', qty: 400  , type: 'demand' }
      },
      334: {
        'bundle': { channel: 'ecom'   , source: 'bundle', qty: 800 , type: 'demand' },
        'shop':   { channel: 'ecom'   , source: 'shop'  , qty: 250  , type: 'demand' },
        'retail': { channel: 'retail' , source: 'target', qty: 150  , type: 'demand' }
      },
      285: {
        'bundle': { channel: 'ecom'   , source: 'bundle', qty: 125 , type: 'demand' },
        'shop':   { channel: 'ecom'   , source: 'shop'  , qty: 300  , type: 'demand' },
        'retail': { channel: 'retail' , source: 'target', qty: 200  , type: 'demand' }
      }
    }
  }

  getHistoricalDemandVariabilityWithSource( product ) {
    if( this.estimatedVariability[product.id] ) {
      return this.estimatedVariability[product.id]
    } else {
      return this.estimatedVariability['else']
    }
  }

  getHistoricalDemandVariability( product ) {
    if( this.estimatedVariability[product.id] ) {
      return this.estimatedVariability[product.id]['bundle']
    } else {
      return this.estimatedVariability['else']['bundle']
    }
  }

  getHistoricalDemandAverageForProductWithSource( product ) {
    return this.estimatedDemandAverages[ product.id ]
  }

  getHistoricalDemandAverageForProduct( product ) {
    return this.estimatedDemandAverages[ product.id ]['bundle']['qty'];
  }

  varyDemand(variability,demand) {
    let adjustment = Math.random() * variability;
    let positive   = Math.random() < .5;
    let modifier   = demand * adjustment;

    let result = positive ? demand + modifier : demand - modifier;

    return Math.round(result);
  }

  synthesizeDemand(dateRange,demandVariability,averageDemand) {
    var history = [];

    dateRange.by('days', (day) => {
      _.each( averageDemand, (data,source) => {
        history.push({
          day: day,
          source: source,
          quantity: this.varyDemand(demandVariability,data.qty)
         });
      });
    });

    return history;
  }

  transformTweakToSequence( tweak ) {
    return {
      day: moment(tweak.date, "M/D/YYYY").startOf('day'),
      source: 'ex-' + tweak.customer,
      quantity: parseInt(tweak.quantity)
    }
  }

  augmentHistoryWithAssumptions(product,history) {
    for( let tweak of this.tweaksService.tweaksForProduct(product) ) {
      console.warn("augmenting tweak",tweak);
      history.push( this.transformTweakToSequence(tweak) );
    }

    return history;
  }

  getHistoryForProduct( product, startDate, endDate ) {
    let averageDemand     = this.getHistoricalDemandAverageForProductWithSource(product);
    let demandVariability = this.getHistoricalDemandVariability(product);

    let dateRange = moment.range(moment(startDate),moment(endDate));

    let history = this.synthesizeDemand(dateRange,demandVariability,averageDemand);

    let augmentedDemandHistory = this.augmentHistoryWithAssumptions(product,history);

    let sortedDemandHistory = _.sortBy(augmentedDemandHistory, 'day');

    return this.$q( (resolve,reject) => {
      this.$timeout( () => { resolve(sortedDemandHistory) } );
    });
  }
}

export default SupplyAndDemandHistoryService;
