class AtRiskService {
  constructor($q,$timeout,ProductsService,InventoryProjectionService) {
    this.$q = $q;
    this.$timeout = $timeout;
  }

  getAtRiskProducts() {
    let products = [
      { id: 1  , sku: 'DIAPERS'     , name: 'Diapers', atRisk: '10/21/2015', dropDead: '10/31/2015', threshold: 10000 },
      { id: 332, sku: 'LOTION-AP'   , name: 'Lotion - Apricot', atRisk: '10/25/2015', dropDead: '11/2/2015', threshold: 5000 },
      { id: 288, sku: 'EYE-CREAM'   , name: 'Eye Cream', atRisk: '10/24/2015', dropDead: '11/2/2015', threshold: 3000 },
      { id: 328, sku: 'CONDITIONER-AP', name: 'Conditioner - Apricot', atRisk: '10/28/2015', dropDead: '11/3/2015', threshold: 2000 },
      { id: 203, sku: 'DHA', name: 'Baby DHA', atRisk: '11/2/2015', dropDead: '11/8/2015', threshold: 5000 },
      { id: 246, sku: 'TOOTHBRUSH', name: 'Adult Toothbrush', atRisk: '11/10/2015', dropDead: '11/20/2015', threshold: 5000 },
      { id: 290, sku: 'REFRESH', name: 'Refresh Clean Gel', atRisk: '11/1/2015', dropDead: '11/22/2015', threshold: 3000 },
      { id: 334, sku: 'BUBBLE-LV', name: 'Bubble Bath - Lavender', atRisk: '11/6/2015', dropDead: '11/25/2015', threshold: 3000 },
      { id: 285, sku: 'KONJAC', name: 'Konjac Sponge', atRisk: '11/18/2015', dropDead: '11/29/2015', threshold: 3000 }
    ]

    return this.$q( (resolve,reject) => {
      this.$timeout(() => {
        resolve(products);
      })
    });
  }

  getAtRiskProductsForRange(startDate, endDate) {

  }
}

export default AtRiskService;
