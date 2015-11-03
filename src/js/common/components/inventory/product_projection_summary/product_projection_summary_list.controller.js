class ProductProjectionSummaryListController {
  constructor($scope,$modal,ProductProjectionModalService,TweaksService) {
    Object.assign(this, {
      $scope, $modal,
      productProjectionModalService: ProductProjectionModalService,
      tweaksService: TweaksService
    });
  }

  displayDetail(product) {
    console.warn('display detail');

    let tweaks = this.tweaksService.tweaksForProduct(product);

    this.modalInstance = this.productProjectionModalService
      .display(product, tweaks);

    this.modalInstance.$promise.then( () => {
      this.modalInstance.show();
    });
  }
}

export default ProductProjectionSummaryListController;
