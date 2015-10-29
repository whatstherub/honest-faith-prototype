class ProductProjectionModalService {
	constructor($modal) {
		this.$modal = $modal;
	}
	
	display( product, config = {} ) {
		this.modalInstance = this.$modal(Object.assign({
      title: product.name,
      placement: 'center',
      controller: () => {
        return {
          product: product
        }
      },
      controllerAs: 'vm',
      contentTemplate: 'js/common/components/inventory/product_projection_detail/product_projection_detail_modal.template.html'
    },config);
		
		return this.modalInstance;
	}
}

export default ProductProjectionModalService;