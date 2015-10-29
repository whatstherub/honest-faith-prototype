class ProductProjectionSummaryListController {
  constructor($scope,$modal,ProductProjectionModalService) {
    this.$scope = $scope;
    this.$modal = $modal;
    this.productProjectionModalService = ProductProjectionModalService;
  }

  displayDetail(product) {
    console.warn('display detail');
    
    this.modalInstance = this.productProjectionModalService.display(product)
    
    this.modalInstance.$promise.then( () => {
      this.modalInstance.show();
    });
  }
}

export default ProductProjectionSummaryListController;
