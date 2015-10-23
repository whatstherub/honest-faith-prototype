class ProductProjectionController {
  constructor(SupplyAndDemandHistoryService) {
    console.warn(this.product);
    
    SupplyAndDemandHistoryService.getHistoryForProduct(
      moment().subtract(30, 'days'),
      moment().add(14, 'days'),
      this.product
    ).then( (history) => {
      this.historicalData = history;
    });
  }
}

export default ProductProjectionController;
