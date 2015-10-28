class ProductProjectionSummaryController {
	constructor() {
		this.riskClass = [];

		this.riskThresholdDate = moment().add(14, 'days');
		this.deadThresholdDate = moment().add(14, 'days');

		this.calculateDisplayStates();
	}

	isAtRisk( atRiskDate ) {
		return atRiskDate.isBefore(this.riskThresholdDate)
			|| atRiskDate.isSame(this.riskThresholdDate)
	}

	isCritical( atRiskDate ) {
		return atRiskDate.isBefore(this.deadThresholdDate)
			|| atRiskDate.isSame(this.deadThresholdDate);
	}

	calculateDisplayStates() {
		let atRiskDate = moment(this.product.atRisk, "M/D/YYYY"),
			dropDeadDate = moment(this.product.dropDead, "M/D/YYYY");

		if( this.isCritical(atRiskDate) ) {
				this.riskClass.push('status-critical');
		} else if( this.isAtRisk(atRiskDate) ) {
			this.riskClass.push( 'status-warning' );
		} else {
			this.riskClass.push( 'status-ok' );
		}
	}
}

export default ProductProjectionSummaryController;
