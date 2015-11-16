/* global _ */
/* global moment */
class AtRiskService {
  constructor($q,$timeout,$resource,ProductsService,InventoryProjectionService) {
    Object.assign(this,{
      $q, $timeout, $resource,
      productsService: ProductsService,
      inventoryProjectionService: InventoryProjectionService
    });

    this.createResource();
  }

  createResource() {
    this.productsResource = this.$resource('/api/products');
  }

  getAtRiskProducts() {
    return this.getAtRiskProductsFromServer();
  }

  getAtRiskProductsFromServer() {
    return this.productsResource.query().$promise;
  }

  getStubbedAtRiskProducts() {
    let products = [
      { id: 1  , sku: 'DIAPERS'     , name: 'Diapers', threshold: 10000 },
      { id: 332, sku: 'LOTION-AP'   , name: 'Lotion - Apricot', threshold: 5000 },
      { id: 288, sku: 'EYE-CREAM'   , name: 'Eye Cream', threshold: 3000 },
      { id: 328, sku: 'CONDITIONER-AP', name: 'Conditioner - Apricot', threshold: 2000 },
      { id: 203, sku: 'DHA', name: 'Baby DHA',  threshold: 5000 },
      { id: 246, sku: 'TOOTHBRUSH', name: 'Adult Toothbrush', threshold: 5000 },
      { id: 290, sku: 'REFRESH', name: 'Refresh Clean Gel', threshold: 3000 },
      { id: 334, sku: 'BUBBLE-LV', name: 'Bubble Bath - Lavender', threshold: 3000 },
      { id: 285, sku: 'KONJAC', name: 'Konjac Sponge', threshold: 3000 }
    ];

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
        let atRiskDate = moment(product.projection.inventoryStates.stockWarning.day);

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
