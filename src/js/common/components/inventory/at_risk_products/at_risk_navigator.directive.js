class AtRiskNavigatorDirective {
  constructor() {
    this.scope = {};
    this.controller = 'AtRiskNavigatorController';
    this.controllerAs = 'navigatorVm';
    this.transclude = true;
    this.template = `<ng-transclude></ng-transclude>`;
  }

  static builder() {
    return new AtRiskNavigatorDirective();
  }
}

export default AtRiskNavigatorDirective;
