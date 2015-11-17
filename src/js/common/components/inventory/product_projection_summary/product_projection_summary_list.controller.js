class ProductProjectionSummaryListController {
  constructor($scope,$modal,ProductProjectionModalService,TweaksService) {
    Object.assign(this, {
      $scope, $modal,
      productProjectionModalService: ProductProjectionModalService,
      tweaksService: TweaksService
    });

    this.associateExistingTweaks();
  }

  associateExistingTweaks() {
    console.warn(this.products);
    for( let product of this.products ) {
      product.tweaks = this.tweaksService.tweaksForProduct(product);
    }
  }

  displayDetail(product) {
    let tweaks = this.tweaksService.tweaksForProduct(product);

    this.modalInstance = this.productProjectionModalService
      .display(product, tweaks);

    this.modalInstance.$promise.then( () => {
      this.modalInstance.show();
    });
  }
}

export default ProductProjectionSummaryListController;
