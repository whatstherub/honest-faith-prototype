class SupplyAndDemandHistoryService {

  constructor($q,$timeout) {
    this.$q = $q;
    this.$timeout = $timeout;

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
        'bundle': { channel: 'ecom'   , source: 'bundle', qty: 1000 , nature: 'demand' },
        'shop':   { channel: 'ecom'   , source: 'shop'  , qty: 300  , nature: 'demand' },
        'retail': { channel: 'retail' , source: 'target', qty: 250  , nature: 'demand' }
      },
      332: {
        'bundle': { channel: 'ecom'   , source: 'bundle', qty: 500 , nature: 'demand' },
        'shop':   { channel: 'ecom'   , source: 'shop'  , qty: 100  , nature: 'demand' },
        'retail': { channel: 'retail' , source: 'target', qty: 50  , nature: 'demand' }
      },
      288: {
        'bundle': { channel: 'ecom'   , source: 'bundle', qty: 750 , nature: 'demand' },
        'shop':   { channel: 'ecom'   , source: 'shop'  , qty: 150  , nature: 'demand' },
        'retail': { channel: 'retail' , source: 'target', qty: 300  , nature: 'demand' }
      },
      328: {
        'bundle': { channel: 'ecom'   , source: 'bundle', qty: 400 , nature: 'demand' },
        'shop':   { channel: 'ecom'   , source: 'shop'  , qty: 100  , nature: 'demand' },
        'retail': { channel: 'retail' , source: 'target', qty: 150  , nature: 'demand' }
      },
      203: {
        'bundle': { channel: 'ecom'   , source: 'bundle', qty: 300 , nature: 'demand' },
        'shop':   { channel: 'ecom'   , source: 'shop'  , qty: 75  , nature: 'demand' },
        'retail': { channel: 'retail' , source: 'target', qty: 10  , nature: 'demand' }
      },
      246: {
        'bundle': { channel: 'ecom'   , source: 'bundle', qty: 900 , nature: 'demand' },
        'shop':   { channel: 'ecom'   , source: 'shop'  , qty: 100  , nature: 'demand' },
        'retail': { channel: 'retail' , source: 'target', qty: 350  , nature: 'demand' }
      },
      290: {
        'bundle': { channel: 'ecom'   , source: 'bundle', qty: 500 , nature: 'demand' },
        'shop':   { channel: 'ecom'   , source: 'shop'  , qty: 100  , nature: 'demand' },
        'retail': { channel: 'retail' , source: 'target', qty: 400  , nature: 'demand' }
      },
      334: {
        'bundle': { channel: 'ecom'   , source: 'bundle', qty: 800 , nature: 'demand' },
        'shop':   { channel: 'ecom'   , source: 'shop'  , qty: 250  , nature: 'demand' },
        'retail': { channel: 'retail' , source: 'target', qty: 150  , nature: 'demand' }
      },
      285: {
        'bundle': { channel: 'ecom'   , source: 'bundle', qty: 125 , nature: 'demand' },
        'shop':   { channel: 'ecom'   , source: 'shop'  , qty: 300  , nature: 'demand' },
        'retail': { channel: 'retail' , source: 'target', qty: 200  , nature: 'demand' }
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

  synthesizeHistory(dateRange,demandVariability,averageDemand) {
    var history = [];

    dateRange.by('days', (day) => {
      _.each( averageDemand, (data,source) => {
        history.push( { day: day, source: source, demand: this.varyDemand(demandVariability,data.qty) } );
      });
    });

    return history;
  }

  getHistoryForProduct( startDate, endDate, product ) {
    let averageDemand     = this.getHistoricalDemandAverageForProductWithSource(product);
    let demandVariability = this.getHistoricalDemandVariability(product);

    let dateRange = moment.range(moment(startDate),moment(endDate));

    let history = this.synthesizeHistory(dateRange,demandVariability,averageDemand);

    return this.$q( (resolve,reject) => {
      this.$timeout( () => { resolve(history) } );
    });
  }
}

export default SupplyAndDemandHistoryService;
