class ProductProjectionController {
  constructor($scope,$log,SupplyAndDemandHistoryService) {
    Object.assign(this, {
      $scope, $log,
      supplyAndDemandHistoryService: SupplyAndDemandHistoryService
    });

    this.projectionStartDate = moment().subtract(30, 'days').startOf('day');
    this.projectionEndDate   = moment().add(14, 'days').startOf('day');

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
      this.product,
      this.projectionStartDate,
      this.projectionEndDate
    )
  }

  handleHistoricalDataUpdate(updateEvent) {
    this.populateHistory();
  }

  listenForHistoricalDataUpdate() {
    this.$scope.$on('inventory-tweaks-updated', (e) => {
      this.$log.warn("got inventory update");
      this.handleHistoricalDataUpdate(e);
    });
  }
}

export default ProductProjectionController;
