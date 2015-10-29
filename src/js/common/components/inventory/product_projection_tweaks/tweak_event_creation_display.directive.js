class TweakEventCreationDisplayDirective {
	constructor() {
		Object.assign({
			scope: {},
			controller: 'TweakEventCreationDisplayController',
			controllerAs: 'vm',
			bindToController: {
				product: '='
			}
		}, this);
	}
	static builder() {
		return new TweakEventCreationDisplayDirective();
	}
}