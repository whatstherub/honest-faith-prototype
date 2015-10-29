class TweakEventCreationDisplayController {
	constructor() {
		this.tweaksOptions = {
			type: [ 'supply', 'demand' ],
			channel: [ 'ecom', 'wholesale', 'retail' ],
			source: [ 'jde', 'www', 'assumption' ],
			customer: [ 'shop', 'bundle', 'vip' ]
		}
	}
}

export default TweakEventCreationDisplayController;
