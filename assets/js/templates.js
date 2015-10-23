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
    '<highchart config="vm.chartConfig"></highchart>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/common/components/inventory/inventory_projection_tweaks.template.html',
    '<div class="aside" role="dialog"><div class="aside-dialog"><div class="aside-content"><div class="aside-header">Tweaks</div><div class="aside-body"><div class="container-fluid"><div class="row"><div class="col-xs-12 inventory-projection-tweaks"><inventory-projection-tweaks></inventory-projection-tweaks></div></div></div></div><div class="aside-footer"></div></div></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/common/components/inventory/inventory_projection_tweaks_display.template.html',
    '<div class="row"><div class="col-xs-12"><ui-select ng-model="vm.tweakProduct.selected" theme="bootstrap"><ui-select-match placeholder="Enter product name...">{{$select.selected.name}}</ui-select-match><ui-select-choices repeat="product in vm.products | filter: $select.search"><span ng-bind-html="product.name | highlight: $select.search"></span></ui-select-choices></ui-select><hr></div></div><div class="row"><div class="col-xs-12"><h4>Projections</h4></div><div class="col-xs-12">Demand Variability</div></div><div class="row"><div class="col-xs-4">bundle</div><div class="col-xs-4">shop</div><dev class="col-xs-4">retail</dev></div><div class="row"><div class="col-xs-4"><input class="form-control" type="text"></div><div class="col-xs-4"><input class="form-control" type="text"></div><div class="col-xs-4"><input class="form-control" type="text"></div></div><div class="row"><div class="col-xs-12"><h4>Events</h4></div></div><div class="row"><div class="col-xs-12"><div class="row"><div class="col-xs-6"><input class="form-control" id="date" ng-model="vm.tweakEvent.date" placeholder="10/27/2015" type="text"></div><div class="col-xs-6"><ui-select ng-model="vm.tweakEvent.type" theme="bootstrap"><ui-select-match placeholder="Type">{{$select.selected}}</ui-select-match><ui-select-choices repeat="type in vm.tweaksOptions.type | filter: $select.search"><span ng-bind-html="type | highlight: $select.search"></span></ui-select-choices></ui-select></div></div><div class="row"><div class="col-xs-6"><ui-select ng-model="vm.tweakEvent.channel" theme="bootstrap"><ui-select-match placeholder="Channel">{{$select.selected}}</ui-select-match><ui-select-choices repeat="channel in vm.tweaksOptions.channel | filter: $select.search"><span ng-bind-html="channel | highlight: $select.search"></span></ui-select-choices></ui-select></div><div class="col-xs-6"><ui-select ng-model="vm.tweakEvent.customer" theme="bootstrap"><ui-select-match placeholder="Customer">{{$select.selected}}</ui-select-match><ui-select-choices repeat="customer in vm.tweaksOptions.customer | filter: $select.search"><span ng-bind-html="customer | highlight: $select.search"></span></ui-select-choices></ui-select></div></div><div class="row"><div class="col-xs-6"><ui-select ng-model="vm.tweakEvent.source" theme="bootstrap"><ui-select-match placeholder="Source">{{$select.selected}}</ui-select-match><ui-select-choices repeat="source in vm.tweaksOptions.source | filter: $select.search"><span ng-bind-html="source | highlight: $select.search"></span></ui-select-choices></ui-select></div><div class="col-xs-6"><input class="form-control" ng-model="vm.tweakEvent.quantity" placeholder="quantity" type="text"></div></div><div class="row"><div class="col-xs-12"><button ng-click="vm.addNewEvent()" title="Create"></button></div></div></div></div>');
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
