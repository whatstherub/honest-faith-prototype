class TweakEventCreationDisplayController {
	constructor(TweaksService) {
		this.tweaksOptions = {
			type: [ 'supply', 'demand' ],
			channel: [ 'ecom', 'wholesale', 'retail' ],
			source: [ 'jde', 'www', 'assumption' ],
			customer: [ 'shop', 'bundle', 'vip' ]
		}

		this.tweaksService = TweaksService;

		this.resetNewEvent();
	}

	resetNewEvent() {
		this.tweakEvent = {
			product: this.product
		};
	}

	preProcessTweakEvent(tweakEvent) {
    tweakEvent.date = moment(tweakEvent.date).format("MM/DD/YYYY");

    return tweakEvent;
  }

	addNewEvent() {
		this.tweaksService.addTweak(
			this.preProcessTweakEvent(this.tweakEvent)
		);

		this.resetNewEvent();
	}
}

export default TweakEventCreationDisplayController;
