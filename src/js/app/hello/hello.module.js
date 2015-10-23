import HelloController from 'app.hello.controller';
import HelloDirective  from 'app.hello.directive';

var moduleName = 'app.hello';

angular.module(moduleName, [])
  .controller('HelloController', HelloController)
  .directive('hello', HelloDirective.builder);

console.warn("registered HD");

export default moduleName;
