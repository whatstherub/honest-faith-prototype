class ProductProjectionSummaryController {
	constructor() {
		this.riskClass = [];


		this.calculateDisplayStates();
	}

	calculateDisplayStates() {
		let riskThresholdDate = moment().add(14, 'days'),
			deadThresholdDate 	= moment().add(14, 'days'),
			atRiskDate   = moment(this.product.atRisk, "M/D/YYYY"),
			dropDeadDate = moment(this.product.dropDead, "M/D/YYYY");

		if( atRiskDate.isBefore(riskThresholdDate) || atRiskDate.isSame(riskThresholdDate) ) {
			this.riskClass.push( 'status-warning' );
		} else {
			this.riskClass.push( 'status-ok' );
		}

	}
}

export default ProductProjectionSummaryController;
