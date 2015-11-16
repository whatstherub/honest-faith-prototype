class ProductProjectionTweakListController {
	constructor($scope,$log,TweaksService) {
		Object.assign(this,{
			$scope, $log,
			tweaksService: TweaksService
		});

		this.watchTweakUpdates();
	}

	handleTweaksUpdate(data) {
		if( this.isRelevantTweakUpdate(data.updateEvent) ) {
			this.$log.warn('inventory update', data);
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
