(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/app/hello/hello.template.html',
    '<div class="test">hello {{vm.name}}</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/common/components/inventory/at_risk_products_over_time.template.html',
    '<highchart config="chartConfig"></highchart>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/common/components/inventory/product_projection.template.html',
    '<div class="row"><div class="col-xs-12">{{vm.product.name}}</div></div><div class="row"><div class="col-xs-12"><product-projection-chart history="vm.historicalData"></product-projection-chart></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/common/components/inventory/product_projection_list.template.html',
    '<div class="product-projection-list"><div ng-repeat="product in vm.atRiskProducts"><div class="product-projection-container col-xs-6"><product-projection product="product"></product-projection></div></div></div>');
}]);
})();
