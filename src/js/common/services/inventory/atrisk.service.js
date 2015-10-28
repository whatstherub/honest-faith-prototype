class AtRiskService {
  constructor($q,$timeout,ProductsService,InventoryProjectionService) {
    this.$q = $q;
    this.$timeout = $timeout;
  }

  getAtRiskProducts() {
    let products = [
      { id: 1  , sku: 'DIAPERS'     , name: 'Diapers', atRisk: '10/21/2015', dropDead: '10/31/2015', threshold: 10000 },
      { id: 332, sku: 'LOTION-AP'   , name: 'Lotion - Apricot', atRisk: '10/25/2015', dropDead: '11/02/2015', threshold: 5000 },
      { id: 288, sku: 'EYE-CREAM'   , name: 'Eye Cream', atRisk: '10/24/2015', dropDead: '11/02/2015', threshold: 3000 },
      { id: 328, sku: 'CONDITIONER-AP', name: 'Conditioner - Apricot', atRisk: '10/28/2015', dropDead: '11/03/2015', threshold: 2000 },
      { id: 203, sku: 'DHA', name: 'Baby DHA', atRisk: '11/2/2015', dropDead: '11/08/2015', threshold: 5000 },
      { id: 246, sku: 'TOOTHBRUSH', name: 'Adult Toothbrush', atRisk: '11/10/2015', dropDead: '11/20/2015', threshold: 5000 },
      { id: 290, sku: 'REFRESH', name: 'Refresh Clean Gel', atRisk: '11/01/2015', dropDead: '11/22/2015', threshold: 3000 },
      { id: 334, sku: 'BUBBLE-LV', name: 'Bubble Bath - Lavender', atRisk: '11/06/2015', dropDead: '11/25/2015', threshold: 3000 },
      { id: 285, sku: 'KONJAC', name: 'Konjac Sponge', atRisk: '11/18/2015', dropDead: '11/29/2015', threshold: 3000 }
    ]

    return this.$q( (resolve,reject) => {
      this.$timeout(() => {
        resolve(products);
      })
    });
  }

  produceRiskRangeByDay( atRiskProducts, range ) {
    var riskRange = [];

    range.by('days', (day) => {
      var atRiskByDay = _.reduce(atRiskProducts, (result,product) => {
        let atRiskDate = moment(product.atRisk, "M/D/YYYY");

        if( ! result.has(day) ) {
          result.set(day, { when: day, atRisk: 0, notAtRisk: 0, atRiskProducts: [] } );
        }

        var dayData = result.get(day);

        if( atRiskDate.isBefore(day) || atRiskDate.isSame(day) ) {
          dayData.atRisk++;
          dayData.atRiskProducts.push(product);
        } else {
          dayData.notAtRisk++;
        }
        return result;
      }, new Map());

      riskRange.push( atRiskByDay.get(day) );

      return true;
    });


    return riskRange;
  }

  getAtRiskProductsForRange(startDate, endDate) {

  }
}

export default AtRiskService;
