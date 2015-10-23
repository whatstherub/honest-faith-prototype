class AtRiskNavigatorDirective {
  constructor() {
    this.scope = {};
    this.controller = 'AtRiskNavigatorController';
    this.controllerAs = 'navigatorVm';
    this.transclude = true;
    this.template = `<ng-transclude></ng-transclude>`;
  }

  link(scope, element, attrs, controllers, transclude) {
    
  }

  static builder() {
    return new AtRiskNavigatorDirective();
  }
}

export default AtRiskNavigatorDirective;
