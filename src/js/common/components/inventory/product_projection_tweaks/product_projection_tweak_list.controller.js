class ProductProjectionTweakListController {
	constructor($scope,TweaksService) {
		this.tweaksService = TweaksService;
	}

	handleTweakUpdate() {

	}
	
	watchTweakUpdates() {
		$scope.$watch(
			() => this.tweaksService.tweaksForProduct(this.product),
			(newTweaks) => this.handleTweakUpdate()
		);
	}
}

export default ProductProjectionTweakListController;
