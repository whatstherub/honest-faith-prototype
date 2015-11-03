class ProductProjectionTweakListDirective {
	constructor() {
		Object.assign(this,{
			scope: {},
			templateUrl: 'js/common/components/inventory/product_projection_tweaks/product_projection_tweak_list.template.html',
			controller: 'ProductProjectionTweakListController',
			controllerAs: 'vm',
			bindToController: {
				product: '=',
				tweaks: '='
			}
		});
	}
	static builder() {
		return new ProductProjectionTweakListDirective();
	}
}

export default ProductProjectionTweakListDirective;
