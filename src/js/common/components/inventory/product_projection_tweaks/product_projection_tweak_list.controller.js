class ProductProjectionTweakListController {
	constructor($scope,TweaksService) {
		Object.assign(this,{
			$scope,
			tweaksService: TweaksService
		});

		this.watchTweakUpdates();
	}

	handleTweaksUpdate(data) {
		if( this.isRelevantTweakUpdate(data.updateEvent) ) {
			console.warn('inventory update', data);
			this.tweaks = data.allEvents;
		}
	}

	isRelevantTweakUpdate(updateEvent) {
		return updateEvent.product.id == this.product.id

	}

	watchTweakUpdates() {
		this.$scope.$on('inventory-tweaks-updated', (updateEvent, data) => {
			this.handleTweaksUpdate(data);
		});
	}
}

export default ProductProjectionTweakListController;
