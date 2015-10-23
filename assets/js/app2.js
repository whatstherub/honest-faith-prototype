System.register('app', ['root.app'], function (_export) {
  'use strict';

  var rootModule;
  return {
    setters: [function (_rootApp) {
      rootModule = _rootApp['default'];
    }],
    execute: function () {

      angular.element(document).ready(function () {
        angular.bootstrap(document, [rootModule]);
      });
    }
  };
});
System.register("config", [], function (_export) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      System.config({
        map: {
          "root.app": "js/app/root.module",

          "app.hello": "js/app/hello/hello.module",

          "app.hello.controller": "js/app/hello/hello.controller",
          "app.hello.directive": "js/app/hello/hello.directive",

          "common.components.inventory": "js/common/components/inventory/inventory.module",
          "common.components.inventory.at_risk_products_over_time.controller": "js/common/components/inventory/at_risk_products_over_time.controller",
          "common.components.inventory.at_risk_products_over_time.directive": "js/common/components/inventory/at_risk_products_over_time.directive",

          "common.services.inventory.atrisk.service": "js/common/services/inventory/atrisk.service",
          "common.services.inventory.products.service": "js/common/services/inventory/products.service",
          "common.services.inventory.inventory_projection.service": "js/common/services/inventory/inventory_projection.service",
          "common.services.inventory.supply_and_demand_history.service": "js/common/services/inventory/supply_and_demand_history.service",
          "common.services.inventory.inventory_details.service": "js/common/services/inventory/inventory_details.service",

          "common.components.inventory.product_projection.controller": "js/common/components/inventory/product_projection.controller",
          "common.components.inventory.product_projection.directive": "js/common/components/inventory/product_projection.directive",

          "common.components.inventory.product_projection_list.controller": "js/common/components/inventory/product_projection_list.controller",
          "common.components.inventory.product_projection_list.directive": "js/common/components/inventory/product_projection_list.directive",

          "common.components.inventory.at_risk_navigator.controller": "js/common/components/inventory/at_risk_navigator.controller",
          "common.components.inventory.at_risk_navigator.directive": "js/common/components/inventory/at_risk_navigator.directive",

          "common.components.inventory.product_projection_chart.controller": "js/common/components/inventory/product_projection_chart.controller",
          "common.components.inventory.product_projection_chart.directive": "js/common/components/inventory/product_projection_chart.directive",

          "common.components.inventory.inventory_projection_tweaks.controller": "js/common/components/inventory/inventory_projection_tweaks.controller",
          "common.components.inventory.inventory_projection_tweaks.directive": "js/common/components/inventory/inventory_projection_tweaks.directive"

        }
      });

      System["import"]('app')["catch"](console.error.bind(console));
    }
  };
});
System.register('js/app/root.module', ['app.hello', 'common.components.inventory'], function (_export) {
  'use strict';

  var helloModule, inventoryModule, moduleName;
  return {
    setters: [function (_appHello) {
      helloModule = _appHello['default'];
    }, function (_commonComponentsInventory) {
      inventoryModule = _commonComponentsInventory['default'];
    }],
    execute: function () {
      moduleName = 'root';

      console.warn("HM: ", helloModule);
      console.warn("IM: ", inventoryModule);

      angular.module(moduleName, ['ngAnimate', 'ngSanitize', 'templates', 'ui.router', 'highcharts-ng', helloModule, inventoryModule]);

      _export('default', moduleName);
    }
  };
});
System.register("js/app/hello/hello.controller", [], function (_export) {
  "use strict";

  var HelloController;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      HelloController = function HelloController() {
        _classCallCheck(this, HelloController);
      };

      _export("default", HelloController);
    }
  };
});
System.register('js/app/hello/hello.directive', [], function (_export) {
  'use strict';

  var HelloDirective;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      HelloDirective = (function () {
        function HelloDirective() {
          _classCallCheck(this, HelloDirective);

          this.scope = {};
          this.templateUrl = 'js/app/hello/hello.template.html';
          this.controller = 'HelloController';
          this.controllerAs = 'vm';

          this.bindToController = {
            name: '@'
          };
        }

        _createClass(HelloDirective, null, [{
          key: 'builder',
          value: function builder() {
            console.warn("building HD");
            return new HelloDirective();
          }
        }]);

        return HelloDirective;
      })();

      HelloDirective.builder.$inject = [];

      _export('default', HelloDirective);
    }
  };
});
System.register('js/app/hello/hello.module', ['app.hello.controller', 'app.hello.directive'], function (_export) {
  'use strict';

  var HelloController, HelloDirective, moduleName;
  return {
    setters: [function (_appHelloController) {
      HelloController = _appHelloController['default'];
    }, function (_appHelloDirective) {
      HelloDirective = _appHelloDirective['default'];
    }],
    execute: function () {
      moduleName = 'app.hello';

      angular.module(moduleName, []).controller('HelloController', HelloController).directive('hello', HelloDirective.builder);

      console.warn("registered HD");

      _export('default', moduleName);
    }
  };
});
System.register('js/common/components/inventory/at_risk_navigator.controller', [], function (_export) {
  'use strict';

  var AtRiskNavigatorController;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      AtRiskNavigatorController = (function () {
        function AtRiskNavigatorController($scope, $aside) {
          _classCallCheck(this, AtRiskNavigatorController);

          this.$scope = $scope;
          this.$aside = $aside;

          this.tweaksDisplayed = false;
          this.atRiskProducts = [];
        }

        _createClass(AtRiskNavigatorController, [{
          key: 'updateSelectedProducts',
          value: function updateSelectedProducts(products) {
            var _this = this;

            console.warn("vm updating products");
            this.atRiskProducts.length = 0;

            _.each(products, function (p) {
              _this.atRiskProducts.push(p);
              return true;
            });
          }
        }, {
          key: 'collapseTweaks',
          value: function collapseTweaks() {}
        }, {
          key: 'expandTweaks',
          value: function expandTweaks() {
            var tweaks = this.$aside({
              title: 'Tweaks',
              templateUrl: 'js/common/components/inventory/inventory_projection_tweaks.template.html'
            });

            tweaks.$promise.then(function () {
              tweaks.show();
            });
          }
        }, {
          key: 'toggleTweaks',
          value: function toggleTweaks() {
            return this.tweaksDisplayed ? this.collapseTweaks() : this.expandTweaks();
          }
        }]);

        return AtRiskNavigatorController;
      })();

      _export('default', AtRiskNavigatorController);
    }
  };
});
System.register('js/common/components/inventory/at_risk_navigator.directive', [], function (_export) {
  'use strict';

  var AtRiskNavigatorDirective;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      AtRiskNavigatorDirective = (function () {
        function AtRiskNavigatorDirective() {
          _classCallCheck(this, AtRiskNavigatorDirective);

          this.scope = {};
          this.controller = 'AtRiskNavigatorController';
          this.controllerAs = 'navigatorVm';
          this.transclude = true;
          this.template = '<ng-transclude></ng-transclude>';
        }

        _createClass(AtRiskNavigatorDirective, [{
          key: 'link',
          value: function link(scope, element, attrs, controllers, transclude) {}
        }], [{
          key: 'builder',
          value: function builder() {
            return new AtRiskNavigatorDirective();
          }
        }]);

        return AtRiskNavigatorDirective;
      })();

      _export('default', AtRiskNavigatorDirective);
    }
  };
});
System.register('js/common/components/inventory/at_risk_products_over_time.controller', [], function (_export) {
  'use strict';

  var AtRiskProductsOverTimeController;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      AtRiskProductsOverTimeController = (function () {
        function AtRiskProductsOverTimeController($scope, $log, AtRiskService) {
          var _this = this;

          _classCallCheck(this, AtRiskProductsOverTimeController);

          this.$log = $log;
          this.$scope = $scope;

          this.chartConfig = this.produceChartConfig();

          var atRiskProductsLoaded = AtRiskService.getAtRiskProducts();

          atRiskProductsLoaded.then(function (products) {
            return _this.processAtRiskProducts(products);
          });
        }

        _createClass(AtRiskProductsOverTimeController, [{
          key: 'processAtRiskProducts',
          value: function processAtRiskProducts(atRiskProducts) {

            this.$log.warn("at risk:", atRiskProducts);

            var firstDay = moment().subtract(2, 'days');
            var lastDay = moment().add(14, 'days');
            var range = moment.range(firstDay, lastDay);

            var riskRange = this.produceRiskRangeByDay(atRiskProducts, range);

            this.$log.debug(riskRange);

            var atRiskSeries = riskRange.map(function (risk) {
              return {
                x: moment.utc(risk.when).valueOf(),
                y: risk.atRisk,
                userData: risk
              };
            });

            var notAtRiskSeries = riskRange.map(function (risk) {
              return { x: moment.utc(risk.when).valueOf(), y: -risk.notAtRisk };
            });

            this.updateChartSeriesData(atRiskSeries, notAtRiskSeries);
          }
        }, {
          key: 'produceRiskRangeByDay',
          value: function produceRiskRangeByDay(atRiskProducts, range) {
            var riskRange = [];

            range.by('days', function (day) {
              var atRiskByDay = _.reduce(atRiskProducts, function (result, product) {
                var atRiskDate = moment(product.atRisk, "M/D/YYYY");

                if (!result.has(day)) {
                  result.set(day, { when: day, atRisk: 0, notAtRisk: 0, atRiskProducts: [] });
                }

                var dayData = result.get(day);

                if (atRiskDate.isBefore(day) || atRiskDate.isSame(day)) {
                  dayData.atRisk++;
                  dayData.atRiskProducts.push(product);
                } else {
                  dayData.notAtRisk++;
                }
                return result;
              }, new Map());

              riskRange.push(atRiskByDay.get(day));

              return true;
            });

            return riskRange;
          }
        }, {
          key: 'handleAtRiskBarSelection',
          value: function handleAtRiskBarSelection(event, series) {
            var _this2 = this;

            this.$scope.$apply(function () {
              _this2.handleProductsSelection({
                selectedProducts: event.point.userData.atRiskProducts
              });
            });
          }
        }, {
          key: 'updateChartSeriesData',
          value: function updateChartSeriesData(atRiskSeries, notAtRiskSeries) {
            var self = this;

            this.chartConfig.series = [{
              cursor: 'pointer',
              name: 'At Risk',
              data: atRiskSeries,
              color: '#FF0000',
              point: {
                events: {
                  click: function click(event) {
                    self.handleAtRiskBarSelection(event, this);
                  }
                }
              }
            }, {
              cursor: 'pointer',
              name: 'Not at risk',
              data: notAtRiskSeries,
              color: '#CCCCCC'
            }];
          }
        }, {
          key: 'produceChartConfig',
          value: function produceChartConfig() {
            return {
              options: {
                chart: {
                  type: 'column'
                },
                plotOptions: {
                  series: {
                    stacking: 'normal'
                  }
                },
                exporting: {
                  enabled: false
                }
              },
              xAxis: [{
                type: 'datetime',
                reversed: false
              }],
              yAxis: {
                title: {
                  text: 'number of products'
                },
                labels: {
                  formatter: function formatter() {
                    return Math.abs(parseInt(this.value));
                  }
                }
              },
              title: {
                text: "At Risk Products"
              }
            };
          }
        }]);

        return AtRiskProductsOverTimeController;
      })();

      _export('default', AtRiskProductsOverTimeController);
    }
  };
});
System.register('js/common/components/inventory/at_risk_products_over_time.directive', [], function (_export) {
  'use strict';

  var AtRiskProductsOverTimeDirective;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      AtRiskProductsOverTimeDirective = (function () {
        function AtRiskProductsOverTimeDirective() {
          _classCallCheck(this, AtRiskProductsOverTimeDirective);

          this.scope = {};
          this.templateUrl = 'js/common/components/inventory/at_risk_products_over_time.template.html';
          this.controller = 'AtRiskProductsOverTimeController';
          this.controllerAs = 'vm';
          this.bindToController = {
            chartConfig: '=',
            handleProductsSelection: '&'
          };
        }

        _createClass(AtRiskProductsOverTimeDirective, null, [{
          key: 'builder',
          value: function builder() {
            return new AtRiskProductsOverTimeDirective();
          }
        }]);

        return AtRiskProductsOverTimeDirective;
      })();

      _export('default', AtRiskProductsOverTimeDirective);
    }
  };
});
System.register('js/common/components/inventory/inventory.module', ['common.components.inventory.at_risk_products_over_time.directive', 'common.components.inventory.at_risk_products_over_time.controller', 'common.services.inventory.atrisk.service', 'common.services.inventory.inventory_projection.service', 'common.services.inventory.products.service', 'common.services.inventory.supply_and_demand_history.service', 'common.services.inventory.inventory_details.service', 'common.components.inventory.product_projection.controller', 'common.components.inventory.product_projection.directive', 'common.components.inventory.at_risk_navigator.controller', 'common.components.inventory.at_risk_navigator.directive', 'common.components.inventory.product_projection_list.directive', 'common.components.inventory.product_projection_list.controller', 'common.components.inventory.product_projection_chart.directive', 'common.components.inventory.product_projection_chart.controller', 'common.components.inventory.inventory_projection_tweaks.directive', 'common.components.inventory.inventory_projection_tweaks.controller'], function (_export) {
  'use strict';

  var AtRiskProductsOverTimeDirective, AtRiskProductsOverTimeController, AtRiskService, InventoryProjectionService, ProductsService, SupplyAndDemandHistoryService, InventoryDetailsService, ProductProjectionController, ProductProjectionDirective, AtRiskNavigatorController, AtRiskNavigatorDirective, ProductProjectionListDirective, ProductProjectionListController, ProductProjectionChartDirective, ProductProjectionChartController, InventoryProjectionTweaksDirective, InventoryProjectionTweaksController, moduleName;
  return {
    setters: [function (_commonComponentsInventoryAt_risk_products_over_timeDirective) {
      AtRiskProductsOverTimeDirective = _commonComponentsInventoryAt_risk_products_over_timeDirective['default'];
    }, function (_commonComponentsInventoryAt_risk_products_over_timeController) {
      AtRiskProductsOverTimeController = _commonComponentsInventoryAt_risk_products_over_timeController['default'];
    }, function (_commonServicesInventoryAtriskService) {
      AtRiskService = _commonServicesInventoryAtriskService['default'];
    }, function (_commonServicesInventoryInventory_projectionService) {
      InventoryProjectionService = _commonServicesInventoryInventory_projectionService['default'];
    }, function (_commonServicesInventoryProductsService) {
      ProductsService = _commonServicesInventoryProductsService['default'];
    }, function (_commonServicesInventorySupply_and_demand_historyService) {
      SupplyAndDemandHistoryService = _commonServicesInventorySupply_and_demand_historyService['default'];
    }, function (_commonServicesInventoryInventory_detailsService) {
      InventoryDetailsService = _commonServicesInventoryInventory_detailsService['default'];
    }, function (_commonComponentsInventoryProduct_projectionController) {
      ProductProjectionController = _commonComponentsInventoryProduct_projectionController['default'];
    }, function (_commonComponentsInventoryProduct_projectionDirective) {
      ProductProjectionDirective = _commonComponentsInventoryProduct_projectionDirective['default'];
    }, function (_commonComponentsInventoryAt_risk_navigatorController) {
      AtRiskNavigatorController = _commonComponentsInventoryAt_risk_navigatorController['default'];
    }, function (_commonComponentsInventoryAt_risk_navigatorDirective) {
      AtRiskNavigatorDirective = _commonComponentsInventoryAt_risk_navigatorDirective['default'];
    }, function (_commonComponentsInventoryProduct_projection_listDirective) {
      ProductProjectionListDirective = _commonComponentsInventoryProduct_projection_listDirective['default'];
    }, function (_commonComponentsInventoryProduct_projection_listController) {
      ProductProjectionListController = _commonComponentsInventoryProduct_projection_listController['default'];
    }, function (_commonComponentsInventoryProduct_projection_chartDirective) {
      ProductProjectionChartDirective = _commonComponentsInventoryProduct_projection_chartDirective['default'];
    }, function (_commonComponentsInventoryProduct_projection_chartController) {
      ProductProjectionChartController = _commonComponentsInventoryProduct_projection_chartController['default'];
    }, function (_commonComponentsInventoryInventory_projection_tweaksDirective) {
      InventoryProjectionTweaksDirective = _commonComponentsInventoryInventory_projection_tweaksDirective['default'];
    }, function (_commonComponentsInventoryInventory_projection_tweaksController) {
      InventoryProjectionTweaksController = _commonComponentsInventoryInventory_projection_tweaksController['default'];
    }],
    execute: function () {
      moduleName = 'common.components.inventory';

      angular.module(moduleName, ['ngAnimate', 'mgcrea.ngStrap', 'ui.select']).directive('atRiskProductsOverTime', AtRiskProductsOverTimeDirective.builder).controller('AtRiskProductsOverTimeController', AtRiskProductsOverTimeController).service('ProductsService', ProductsService).service('InventoryProjectionService', InventoryProjectionService).service('AtRiskService', AtRiskService).service('SupplyAndDemandHistoryService', SupplyAndDemandHistoryService).service('InventoryDetailsService', InventoryDetailsService).controller('ProductProjectionController', ProductProjectionController).directive('productProjection', ProductProjectionDirective.builder).controller('ProductProjectionListController', ProductProjectionListController).directive('productProjectionList', ProductProjectionListDirective.builder).controller('ProductProjectionChartController', ProductProjectionChartController).directive('productProjectionChart', ProductProjectionChartDirective.builder).controller('InventoryProjectionTweaksController', InventoryProjectionTweaksController).directive('inventoryProjectionTweaks', InventoryProjectionTweaksDirective.builder).controller('AtRiskNavigatorController', AtRiskNavigatorController).directive('atRiskNavigator', AtRiskNavigatorDirective.builder);

      _export('default', moduleName);
    }
  };
});
System.register('js/common/components/inventory/inventory_projection_tweaks.controller', [], function (_export) {
  'use strict';

  var InventoryProjectionTweaksController;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      InventoryProjectionTweaksController = (function () {
        function InventoryProjectionTweaksController($rootScope, $scope, AtRiskService, SupplyAndDemandHistoryService) {
          _classCallCheck(this, InventoryProjectionTweaksController);

          this.$rootScope = $rootScope;
          this.$scope = $scope;

          this.atRiskService = AtRiskService;
          this.supplyAndDemandHistoryService = SupplyAndDemandHistoryService;

          this.tweakProduct = {};

          this.tweakEvent = {};

          this.tweaksOptions = {
            type: ['supply', 'demand'],
            channel: ['ecom', 'wholesale', 'retail'],
            source: ['jde', 'www', 'assumption'],
            customer: ['shop', 'bundle', 'vip']
          };

          this.tweaksPrototype = {
            variability: {},
            demand: {},
            events: {
              supply: {},
              demand: {}
            }
          };

          this.watchProductSelection();
          this.populateProducts();
        }

        _createClass(InventoryProjectionTweaksController, [{
          key: 'addNewEvent',
          value: function addNewEvent() {
            console.log("Adding", this.tweakEvent);

            this.supplyAndDemandHistoryService.addTweak(this.tweakEvent);

            this.tweakEvent = {};

            this.broadcastUpdate();
          }
        }, {
          key: 'updateSelectedProduct',
          value: function updateSelectedProduct(product) {
            console.warn("Updating selected product:", product);
            this.tweakEvent = {
              product: product
            };
          }
        }, {
          key: 'watchProductSelection',
          value: function watchProductSelection() {
            var _this = this;

            this.$scope.$watch(function () {
              return _this.tweakProduct.selected;
            }, function (newValue) {
              _this.updateSelectedProduct(newValue);
            });
          }
        }, {
          key: 'populateProducts',
          value: function populateProducts() {
            var _this2 = this;

            return this.atRiskService.getAtRiskProducts().then(function (products) {
              _this2.products = products;
              _this2.tweaks = {};

              _.each(_this2.products, function (p) {});
            });
          }
        }, {
          key: 'updateVariabilityForProduct',
          value: function updateVariabilityForProduct(product, type, variability) {
            this.supplyAndDemandHistoryService.updateVariability(product, {
              type: variability
            });

            this.broadcastUpdate();
          }
        }, {
          key: 'broadcastUpdate',
          value: function broadcastUpdate() {
            this.$rootScope.$broadcast('inventory-tweaks-updated', {});
          }
        }]);

        return InventoryProjectionTweaksController;
      })();

      _export('default', InventoryProjectionTweaksController);
    }
  };
});
System.register('js/common/components/inventory/inventory_projection_tweaks.directive', [], function (_export) {
  'use strict';

  var InventoryProjectionTweaksDirective;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      InventoryProjectionTweaksDirective = (function () {
        function InventoryProjectionTweaksDirective() {
          _classCallCheck(this, InventoryProjectionTweaksDirective);

          this.scope = {};
          this.controller = 'InventoryProjectionTweaksController';
          this.controllerAs = 'vm';
          this.templateUrl = 'js/common/components/inventory/inventory_projection_tweaks_display.template.html';
        }

        _createClass(InventoryProjectionTweaksDirective, null, [{
          key: 'builder',
          value: function builder() {
            return new InventoryProjectionTweaksDirective();
          }
        }]);

        return InventoryProjectionTweaksDirective;
      })();

      _export('default', InventoryProjectionTweaksDirective);
    }
  };
});
System.register('js/common/components/inventory/product_projection.controller', [], function (_export) {
  'use strict';

  var ProductProjectionController;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      ProductProjectionController = (function () {
        function ProductProjectionController($scope, SupplyAndDemandHistoryService) {
          _classCallCheck(this, ProductProjectionController);

          this.$scope = $scope;
          this.supplyAndDemandHistoryService = SupplyAndDemandHistoryService;

          this.populateHistory();

          this.listenForHistoricalDataUpdate();
        }

        _createClass(ProductProjectionController, [{
          key: 'populateHistory',
          value: function populateHistory() {
            var _this = this;

            this.requestHistory().then(function (history) {
              _this.historicalData = history;
            });
          }
        }, {
          key: 'requestHistory',
          value: function requestHistory() {
            return this.supplyAndDemandHistoryService.getHistoryForProduct(moment().subtract(30, 'days').startOf('day'), moment().add(14, 'days').startOf('day'), this.product);
          }
        }, {
          key: 'handleHistoricalDataUpdate',
          value: function handleHistoricalDataUpdate() {
            this.populateHistory();
          }
        }, {
          key: 'listenForHistoricalDataUpdate',
          value: function listenForHistoricalDataUpdate() {
            var _this2 = this;

            this.$scope.$on('inventory-tweaks-updated', function (e) {
              console.warn("got inventory update");
              _this2.handleHistoricalDataUpdate();
            });
          }
        }]);

        return ProductProjectionController;
      })();

      _export('default', ProductProjectionController);
    }
  };
});
System.register('js/common/components/inventory/product_projection.directive', [], function (_export) {
  'use strict';

  var ProductProjectionDirective;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      ProductProjectionDirective = (function () {
        function ProductProjectionDirective() {
          _classCallCheck(this, ProductProjectionDirective);

          this.scope = {};
          this.controller = 'ProductProjectionController';
          this.controllerAs = 'vm';
          this.templateUrl = 'js/common/components/inventory/product_projection.template.html';
          this.bindToController = {
            product: '='
          };
        }

        _createClass(ProductProjectionDirective, null, [{
          key: 'builder',
          value: function builder() {
            return new ProductProjectionDirective();
          }
        }]);

        return ProductProjectionDirective;
      })();

      _export('default', ProductProjectionDirective);
    }
  };
});
System.register("js/common/components/inventory/product_projection_chart.controller", [], function (_export) {
  "use strict";

  var ProductProjectionChartController;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      ProductProjectionChartController = (function () {
        function ProductProjectionChartController($scope) {
          _classCallCheck(this, ProductProjectionChartController);

          this.$scope = $scope;
          this.chartConfig = this.produceChartConfig();

          this.seriesIndexes = {
            inventory: 10,
            inventoryWarnings: 11
          };

          this.watchChartDataUpdates();
        }

        _createClass(ProductProjectionChartController, [{
          key: "watchChartDataUpdates",
          value: function watchChartDataUpdates() {
            var _this = this;

            this.$scope.$watch(function () {
              return _this.history;
            }, function (newVal) {
              console.warn("updating chart");
              _this.updateChartSeriesData(_this.history);
            });
          }
        }, {
          key: "synthesizeFlagSeries",
          value: function synthesizeFlagSeries(history) {
            var dayCounts = this.calculateTotalDemandByDay(history);

            var data = [];

            _.find(dayCounts, function (c) {
              if (c[1] <= 0) {
                data.push({ x: c[0], title: "Out of stock" });
                console.warn("found OOS");
                return true;
              }
              return false;
            });

            return {
              zIndex: this.seriesIndexes.inventoryWarnings,
              id: 'inventory-warnings',
              name: 'inventory warnings',
              type: 'flags',
              shape: 'squarepin',
              onSeries: 'inventory',
              data: data
            };
          }
        }, {
          key: "calculateTotalDemandByDay",
          value: function calculateTotalDemandByDay(history) {
            var startingCount = 55000;

            var days = _.groupBy(history, function (h) {
              return h.day;
            });

            var dayCounts = _.map(days, function (dayData, key) {
              var count = _.reduce(dayData, function (result, dataPoint) {
                return result += dataPoint.quantity;
              }, 0);
              console.warn("key:", key);
              return [moment(key).startOf('day').utc().valueOf(), startingCount -= count];
            });

            return dayCounts;
          }
        }, {
          key: "synthesizeInventorySeries",
          value: function synthesizeInventorySeries(history) {

            var dayCounts = this.calculateTotalDemandByDay(history);

            var daySeries = _.sortBy(dayCounts, function (c) {
              return c[0];
            });

            return {
              id: 'inventory',
              zIndex: this.seriesIndexes.inventory,
              name: 'inventory',
              type: 'line',
              yAxis: 1,
              lineWidth: 2,
              lineColor: '#000000',
              marker: {
                enabled: false
              },
              zones: [{
                value: 0,
                color: '#FF0000'
              }, {
                color: '#CCCCCC',
                lineWidth: 5
              }],
              data: daySeries
            };
          }
        }, {
          key: "updateChartSeriesData",
          value: function updateChartSeriesData(history) {
            var _this2 = this;

            var self = this;

            var groups = _.groupBy(history, 'source');

            var newSeries = _.map(groups, function (group, name) {
              return {
                type: 'area',
                name: name,
                data: _this2.convertHistoryToSeriesData(group)
              };
            });

            newSeries.push(this.synthesizeInventorySeries(history));
            newSeries.push(this.synthesizeFlagSeries(history));

            _.each(newSeries, function (s, index) {
              s.color = Highcharts.Color('#CCCCCC').brighten((index - 4) / 10).get();
            });

            this.chartConfig.series = newSeries;
          }
        }, {
          key: "convertHistoryToSeriesData",
          value: function convertHistoryToSeriesData(history) {
            return history.map(function (h) {
              return [h.day.utc().valueOf(), h.quantity];
            });
          }
        }, {
          key: "produceChartConfig",
          value: function produceChartConfig() {
            return {
              options: {
                chart: {
                  height: 200
                },
                exporting: {
                  enabled: false
                },
                tooltip: {
                  shared: true
                },
                plotOptions: {
                  area: {
                    stacking: 'normal'
                  }
                }
              },
              xAxis: [{
                type: 'datetime',
                reversed: false
              }],
              yAxis: [{
                title: {
                  text: 'demand'
                }
              }, {
                title: {
                  text: 'inventory'
                },
                opposite: true,
                min: -5000

              }],
              title: {
                text: null
              }
            };
          }
        }]);

        return ProductProjectionChartController;
      })();

      _export("default", ProductProjectionChartController);
    }
  };
});
System.register('js/common/components/inventory/product_projection_chart.directive', [], function (_export) {
  'use strict';

  var ProductProjectionChartDirective;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      ProductProjectionChartDirective = (function () {
        function ProductProjectionChartDirective() {
          _classCallCheck(this, ProductProjectionChartDirective);

          this.scope = {};
          this.controller = 'ProductProjectionChartController';
          this.controllerAs = 'vm';
          this.template = '<highchart config="vm.chartConfig"></highchart>';
          this.bindToController = {
            history: '='
          };
        }

        _createClass(ProductProjectionChartDirective, null, [{
          key: 'builder',
          value: function builder() {
            return new ProductProjectionChartDirective();
          }
        }]);

        return ProductProjectionChartDirective;
      })();

      _export('default', ProductProjectionChartDirective);
    }
  };
});
System.register("js/common/components/inventory/product_projection_list.controller", [], function (_export) {
  "use strict";

  var ProductProjectionListController;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      ProductProjectionListController = function ProductProjectionListController() {
        _classCallCheck(this, ProductProjectionListController);
      };

      _export("default", ProductProjectionListController);
    }
  };
});
System.register('js/common/components/inventory/product_projection_list.directive', [], function (_export) {
  'use strict';

  var ProductProjectionListDirective;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      ProductProjectionListDirective = (function () {
        function ProductProjectionListDirective() {
          _classCallCheck(this, ProductProjectionListDirective);

          this.scope = {};
          this.templateUrl = 'js/common/components/inventory/product_projection_list.template.html';
          this.controller = 'ProductProjectionListController';
          this.controllerAs = 'vm';
          this.bindToController = {
            atRiskProducts: '='
          };
        }

        _createClass(ProductProjectionListDirective, [{
          key: 'link',
          value: function link(scope, element, attrs, controllers) {
            console.warn("controllers:", controllers);
          }
        }], [{
          key: 'builder',
          value: function builder() {
            return new ProductProjectionListDirective();
          }
        }]);

        return ProductProjectionListDirective;
      })();

      _export('default', ProductProjectionListDirective);
    }
  };
});
System.register('js/common/services/inventory/atrisk.service', [], function (_export) {
  'use strict';

  var AtRiskService;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      AtRiskService = (function () {
        function AtRiskService($q, $timeout, ProductsService, InventoryProjectionService) {
          _classCallCheck(this, AtRiskService);

          this.$q = $q;
          this.$timeout = $timeout;
        }

        _createClass(AtRiskService, [{
          key: 'getAtRiskProducts',
          value: function getAtRiskProducts() {
            var _this = this;

            var products = [{ id: 1, sku: 'DIAPERS', name: 'Diapers', atRisk: '10/21/2015', dropDead: '10/31/2015', threshold: 10000 }, { id: 332, sku: 'LOTION-AP', name: 'Lotion - Apricot', atRisk: '10/25/2015', dropDead: '11/2/2015', threshold: 5000 }, { id: 288, sku: 'EYE-CREAM', name: 'Eye Cream', atRisk: '10/24/2015', dropDead: '11/2/2015', threshold: 3000 }, { id: 328, sku: 'CONDITIONER-AP', name: 'Conditioner - Apricot', atRisk: '10/28/2015', dropDead: '11/3/2015', threshold: 2000 }, { id: 203, sku: 'DHA', name: 'Baby DHA', atRisk: '11/2/2015', dropDead: '11/8/2015', threshold: 5000 }, { id: 246, sku: 'TOOTHBRUSH', name: 'Adult Toothbrush', atRisk: '11/10/2015', dropDead: '11/20/2015', threshold: 5000 }, { id: 290, sku: 'REFRESH', name: 'Refresh Clean Gel', atRisk: '11/1/2015', dropDead: '11/22/2015', threshold: 3000 }, { id: 334, sku: 'BUBBLE-LV', name: 'Bubble Bath - Lavender', atRisk: '11/6/2015', dropDead: '11/25/2015', threshold: 3000 }, { id: 285, sku: 'KONJAC', name: 'Konjac Sponge', atRisk: '11/18/2015', dropDead: '11/29/2015', threshold: 3000 }];

            return this.$q(function (resolve, reject) {
              _this.$timeout(function () {
                resolve(products);
              });
            });
          }
        }, {
          key: 'getAtRiskProductsForRange',
          value: function getAtRiskProductsForRange(startDate, endDate) {}
        }]);

        return AtRiskService;
      })();

      _export('default', AtRiskService);
    }
  };
});
System.register("js/common/services/inventory/inventory_details.service", [], function (_export) {
  "use strict";

  var InventoryDetailsService;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      InventoryDetailsService = function InventoryDetailsService() {
        _classCallCheck(this, InventoryDetailsService);
      };

      _export("default", InventoryDetailsService);
    }
  };
});
System.register("js/common/services/inventory/inventory_projection.service", [], function (_export) {
  "use strict";

  var InventoryProjectionService;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      InventoryProjectionService = function InventoryProjectionService() {
        _classCallCheck(this, InventoryProjectionService);
      };

      _export("default", InventoryProjectionService);
    }
  };
});
System.register("js/common/services/inventory/products.service", [], function (_export) {
  "use strict";

  var ProductsService;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      ProductsService = function ProductsService() {
        _classCallCheck(this, ProductsService);
      };

      _export("default", ProductsService);
    }
  };
});
System.register('js/common/services/inventory/supply_and_demand_history.service', [], function (_export) {
  'use strict';

  var SupplyAndDemandHistoryService;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      SupplyAndDemandHistoryService = (function () {
        function SupplyAndDemandHistoryService($q, $timeout) {
          _classCallCheck(this, SupplyAndDemandHistoryService);

          this.$q = $q;
          this.$timeout = $timeout;

          this.tweaks = [];

          this.estimatedVariability = {
            1: {
              'bundle': 0.15,
              'shop': 0.10,
              'retail': 0.15
            },
            'else': {
              'bundle': 0.10,
              'shop': 0.10,
              'retail': 0.10
            }
          };

          this.estimatedDemandAverages = {
            1: {
              'bundle': { channel: 'ecom', source: 'bundle', qty: 1000, type: 'demand' },
              'shop': { channel: 'ecom', source: 'shop', qty: 300, type: 'demand' },
              'retail': { channel: 'retail', source: 'target', qty: 250, type: 'demand' }
            },
            332: {
              'bundle': { channel: 'ecom', source: 'bundle', qty: 500, type: 'demand' },
              'shop': { channel: 'ecom', source: 'shop', qty: 100, type: 'demand' },
              'retail': { channel: 'retail', source: 'target', qty: 50, type: 'demand' }
            },
            288: {
              'bundle': { channel: 'ecom', source: 'bundle', qty: 750, type: 'demand' },
              'shop': { channel: 'ecom', source: 'shop', qty: 150, type: 'demand' },
              'retail': { channel: 'retail', source: 'target', qty: 300, type: 'demand' }
            },
            328: {
              'bundle': { channel: 'ecom', source: 'bundle', qty: 400, type: 'demand' },
              'shop': { channel: 'ecom', source: 'shop', qty: 100, type: 'demand' },
              'retail': { channel: 'retail', source: 'target', qty: 150, type: 'demand' }
            },
            203: {
              'bundle': { channel: 'ecom', source: 'bundle', qty: 300, type: 'demand' },
              'shop': { channel: 'ecom', source: 'shop', qty: 75, type: 'demand' },
              'retail': { channel: 'retail', source: 'target', qty: 10, type: 'demand' }
            },
            246: {
              'bundle': { channel: 'ecom', source: 'bundle', qty: 900, type: 'demand' },
              'shop': { channel: 'ecom', source: 'shop', qty: 100, type: 'demand' },
              'retail': { channel: 'retail', source: 'target', qty: 350, type: 'demand' }
            },
            290: {
              'bundle': { channel: 'ecom', source: 'bundle', qty: 500, type: 'demand' },
              'shop': { channel: 'ecom', source: 'shop', qty: 100, type: 'demand' },
              'retail': { channel: 'retail', source: 'target', qty: 400, type: 'demand' }
            },
            334: {
              'bundle': { channel: 'ecom', source: 'bundle', qty: 800, type: 'demand' },
              'shop': { channel: 'ecom', source: 'shop', qty: 250, type: 'demand' },
              'retail': { channel: 'retail', source: 'target', qty: 150, type: 'demand' }
            },
            285: {
              'bundle': { channel: 'ecom', source: 'bundle', qty: 125, type: 'demand' },
              'shop': { channel: 'ecom', source: 'shop', qty: 300, type: 'demand' },
              'retail': { channel: 'retail', source: 'target', qty: 200, type: 'demand' }
            }
          };
        }

        _createClass(SupplyAndDemandHistoryService, [{
          key: 'getHistoricalDemandVariabilityWithSource',
          value: function getHistoricalDemandVariabilityWithSource(product) {
            if (this.estimatedVariability[product.id]) {
              return this.estimatedVariability[product.id];
            } else {
              return this.estimatedVariability['else'];
            }
          }
        }, {
          key: 'getHistoricalDemandVariability',
          value: function getHistoricalDemandVariability(product) {
            if (this.estimatedVariability[product.id]) {
              return this.estimatedVariability[product.id]['bundle'];
            } else {
              return this.estimatedVariability['else']['bundle'];
            }
          }
        }, {
          key: 'getHistoricalDemandAverageForProductWithSource',
          value: function getHistoricalDemandAverageForProductWithSource(product) {
            return this.estimatedDemandAverages[product.id];
          }
        }, {
          key: 'getHistoricalDemandAverageForProduct',
          value: function getHistoricalDemandAverageForProduct(product) {
            return this.estimatedDemandAverages[product.id]['bundle']['qty'];
          }
        }, {
          key: 'varyDemand',
          value: function varyDemand(variability, demand) {
            var adjustment = Math.random() * variability;
            var positive = Math.random() < .5;
            var modifier = demand * adjustment;

            var result = positive ? demand + modifier : demand - modifier;

            return Math.round(result);
          }
        }, {
          key: 'synthesizeDemand',
          value: function synthesizeDemand(dateRange, demandVariability, averageDemand) {
            var _this = this;

            var history = [];

            dateRange.by('days', function (day) {
              _.each(averageDemand, function (data, source) {
                console.warn('day:', day.valueOf());
                history.push({ day: day, source: source, quantity: _this.varyDemand(demandVariability, data.qty) });
              });
            });

            return history;
          }
        }, {
          key: 'transformTweakToSequence',
          value: function transformTweakToSequence(tweak) {
            return {
              day: moment(tweak.date, "M/D/YYYY").startOf('day'),
              source: 'ex-' + tweak.customer,
              quantity: parseInt(tweak.quantity)
            };
          }
        }, {
          key: 'addTweak',
          value: function addTweak(tweak) {
            this.tweaks.push(tweak);
          }
        }, {
          key: 'clearTweaks',
          value: function clearTweaks() {
            this.tweaks.length = 0;
          }
        }, {
          key: 'augmentHistoryWithAssumptions',
          value: function augmentHistoryWithAssumptions(history) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = this.tweaks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var tweak = _step.value;

                console.warn("augmenting tweak", tweak);
                history.push(this.transformTweakToSequence(tweak));
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator['return']) {
                  _iterator['return']();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            return history;
          }
        }, {
          key: 'getHistoryForProduct',
          value: function getHistoryForProduct(startDate, endDate, product) {
            var _this2 = this;

            var averageDemand = this.getHistoricalDemandAverageForProductWithSource(product);
            var demandVariability = this.getHistoricalDemandVariability(product);

            var dateRange = moment.range(moment(startDate), moment(endDate));

            var history = this.synthesizeDemand(dateRange, demandVariability, averageDemand);

            var augmentedDemandHistory = this.augmentHistoryWithAssumptions(history);

            var sortedDemandHistory = _.sortBy(augmentedDemandHistory, 'day');

            return this.$q(function (resolve, reject) {
              _this2.$timeout(function () {
                resolve(augmentedDemandHistory);
              });
            });
          }
        }]);

        return SupplyAndDemandHistoryService;
      })();

      _export('default', SupplyAndDemandHistoryService);
    }
  };
});