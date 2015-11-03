class ProductProjectionTweakListController {
	constructor($scope,TweaksService) {
		Object.assign(this,{
			$scope,
			tweaksService: TweaksService
		});

		this.watchTweakUpdates();
	}

	handleTweakUpdate(newTweaks) {
		this.tweaks = newTweaks;

		console.warn("tweaks updated", newTweaks);
	}

	watchTweakUpdates() {
		this.$scope.$on('inventory-tweaks-updated', (updateEvent, data) => {
			console.warn('inventory update', data);
			this.tweaks = data.allEvents;
		});
	}
}

export default ProductProjectionTweakListController;
