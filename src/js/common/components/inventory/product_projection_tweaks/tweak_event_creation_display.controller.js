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

	addNewEvent() {
		console.log("Adding", this.tweakEvent);
		this.tweakEvent.date = moment(this.tweakEvent.date).format("MM/DD/YYYY");

    console.log("adding:", this.tweakEvent);

		this.tweaksService.addTweak(this.tweakEvent);

		this.resetNewEvent();
	}
}

export default TweakEventCreationDisplayController;
