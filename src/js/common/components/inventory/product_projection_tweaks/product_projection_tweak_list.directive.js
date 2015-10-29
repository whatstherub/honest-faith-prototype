class ProductProjectionTweakListDirective {
	constructor() {
		Object.assign({
			scope: {},
			controller: 'ProductProjectionTweakListController',
			controllerAs: 'vm',
			bindToController: {
				product: '='
			}
		}, this);
	}
	static builder() {
		return new ProductProjectionTweakListDirective();
	}
}

export default ProductProjectionTweakListDirective;