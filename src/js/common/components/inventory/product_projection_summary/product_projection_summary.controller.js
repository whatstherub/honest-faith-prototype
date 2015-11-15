/* global moment */
class ProductProjectionSummaryController {
	constructor($scope,InventoryProjectionService) {
		this.inventoryProjectionService = InventoryProjectionService;

		this.riskClass = [];

		this.riskThresholdDate = moment().add(14, 'days');
		this.deadThresholdDate = moment().add(7, 'days');

		this.calculateProjections();
		this.calculateRiskStatus();
		this.calculateDisplayStates();
	}

	handleClick() {
		this.handleSelection({
			product: this.product
		});
	}

	isAtRisk( atRiskDate ) {
		return atRiskDate.isBefore(this.riskThresholdDate)
			|| atRiskDate.isSame(this.riskThresholdDate)
	}

	isCritical( atRiskDate ) {
		return atRiskDate.isBefore(this.deadThresholdDate)
			|| atRiskDate.isSame(this.deadThresholdDate);
	}

	get prettyAtRisk() {
		return this.productAtRiskMoment.format("MMM Do");
	}

	get prettyDropDead() {
		return this.productDropDeadMoment.format("MMM Do");
	}

	get productAtRiskMoment() {
		return moment(this.productAtRisk);
	}

	get productDropDeadMoment() {
		return moment(this.productDropDead);
	}

	calculateProjections() {
		this.projections = this.product.projection

		this.productAtRisk 		= this.projections.inventoryStates.stockWarning.day;
		this.productDropDead 	= this.projections.inventoryStates.stockCritical.day;
	}

	calculateRiskStatus() {
		this.daysUntilOutOfStock = this.productDropDeadMoment.diff(moment(),'days');
		this.daysUntilRisk       = this.productAtRiskMoment.diff(moment(), 'days' );

		if( this.isCritical(this.productAtRiskMoment) ) {
			this.riskStatus = 'critical';
		} else if( this.isAtRisk(this.productAtRiskMoment) ) {
			this.riskStatus = 'warning';
		} else {
			this.riskStatus = 'ok';
		}

		return this.riskStatus;
	}

	calculateDisplayStates() {
		let status = 'status-' + this.calculateRiskStatus(
			this.productAtRiskMoment,
			this.productDropDeadMoment
		);

		this.riskClass.length = 0;
		this.riskClass.push( status );
	}
}

export default ProductProjectionSummaryController;
