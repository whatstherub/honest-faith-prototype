class TweakEventCreationDisplayDirective {
	constructor() {
		Object.assign(this,{
			scope: {},
			templateUrl: 'js/common/components/inventory/product_projection_tweaks/tweak_event_creation_display.template.html',
			controller: 'TweakEventCreationDisplayController',
			controllerAs: 'vm',
			bindToController: {
				product: '='
			}
		});
	}
	static builder() {
		return new TweakEventCreationDisplayDirective();
	}
}

export default TweakEventCreationDisplayDirective;
