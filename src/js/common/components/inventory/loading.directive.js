class LoadingDirective {
  constructor($animate,$timeout) {
    Object.assign(this, {
      $animate, $timeout,
      restrict: 'C'
    });
  }
  static builder($animate,$timeout) {
    return new LoadingDirective($animate,$timeout);
  }

  compile() {
    return this.link.bind(this);
  }
  link(scope, element, attributes) {
    this.$timeout( () => {
      let mask = element.children().eq(0);

      this.$animate.leave( mask  ).then( () => {
        element.remove();
      });
    });

  }
}

export default LoadingDirective;
