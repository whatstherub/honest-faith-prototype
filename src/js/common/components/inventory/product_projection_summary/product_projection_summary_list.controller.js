class ProductProjectionSummaryListController {
  constructor($scope,$modal) {
    this.$scope = $scope;
    this.$modal = $modal;
  }

  displayDetail(product) {
    console.warn('display detail');

    this.modalInstance = this.$modal({
      title: product.name,
      controller: () => {
        console.warn('ctrl created');
        return {
          product: product
        }
      },
      controllerAs: 'vm',
      contentTemplate: 'js/common/components/inventory/product_projection_detail/product_projection_detail_modal.template.html'
    });

    this.modalInstance.$promise.then( () => {
      this.modalInstance.show();
    });
  }
}

export default ProductProjectionSummaryListController;
