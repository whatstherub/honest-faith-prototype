class ProductProjectionController {
  constructor($scope,SupplyAndDemandHistoryService) {
    this.$scope = $scope;
    this.supplyAndDemandHistoryService = SupplyAndDemandHistoryService;

    this.populateHistory();


    this.listenForHistoricalDataUpdate();
  }

  populateHistory() {
    this.requestHistory().then( (history) => {
      this.historicalData = history;
    });
  }

  requestHistory() {
    return this.supplyAndDemandHistoryService.getHistoryForProduct(
      moment().subtract(30, 'days').startOf('day'),
      moment().add(14, 'days').startOf('day'),
      this.product
    )
  }

  handleHistoricalDataUpdate() {
    this.populateHistory();
  }

  listenForHistoricalDataUpdate() {
    this.$scope.$on('inventory-tweaks-updated', (e) => {
      console.warn("got inventory update");
      this.handleHistoricalDataUpdate();
    });
  }
}

export default ProductProjectionController;
