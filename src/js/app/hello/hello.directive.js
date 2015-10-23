class HelloDirective {
  constructor() {
    this.scope = {};
    this.templateUrl  = 'js/app/hello/hello.template.html'
    this.controller   = 'HelloController';
    this.controllerAs = 'vm';

    this.bindToController = {
      name: '@'
    };
  }

  static builder() {
    console.warn("building HD");
    return new HelloDirective();
  }
}

HelloDirective.builder.$inject = [];

export default HelloDirective;
