class ProductProjectionModalService {
	constructor($modal) {
		this.$modal = $modal;

		this.contentTemplate 	= 'js/common/components/inventory/product_projection_detail/product_projection_detail.template.html';
		this.modalTemplate		= 'js/common/components/inventory/product_projection_detail/product_projection_detail_modal.template.html';
	}

	display( product, config = {} ) {
		let { dialogClasses = ['wide'] } = config;

		this.modalInstance = this.$modal(Object.assign({
      title: product.name,
      placement: 'center',
      controller: () => {
        return {
          product: product,
					dialogClasses: dialogClasses
        }
      },
      controllerAs: 'vm',
			templateUrl: this.modalTemplate,
      contentTemplate: this.contentTemplate
    },config));

		return this.modalInstance;
	}
}

export default ProductProjectionModalService;
