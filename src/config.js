System.config({
  map: {
    "root.app": "js/app/root.module",

    "app.hello": "js/app/hello/hello.module",

    "app.hello.controller": "js/app/hello/hello.controller",
    "app.hello.directive": "js/app/hello/hello.directive",

    "common.components.inventory": "js/common/components/inventory/inventory.module",
    "common.components.inventory.product_projection_summary": "js/common/components/inventory/product_projection_summary/product_projection_summary.module",

   "common.components.inventory.product_projection_summary.product_projection_summary.directive": "js/common/components/inventory/product_projection_summary/product_projection_summary.directive",
   "common.components.inventory.product_projection_summary.product_projection_summary.controller": "js/common/components/inventory/product_projection_summary/product_projection_summary.controller",

   "common.components.inventory.product_projection_summary.product_projection_summary_list.directive": "js/common/components/inventory/product_projection_summary/product_projection_summary_list.directive",
   "common.components.inventory.product_projection_summary.product_projection_summary_list.controller": "js/common/components/inventory/product_projection_summary/product_projection_summary_list.controller",


    "common.components.inventory.at_risk_products_over_time.controller": "js/common/components/inventory/at_risk_products_over_time.controller",
    "common.components.inventory.at_risk_products_over_time.directive": "js/common/components/inventory/at_risk_products_over_time.directive",

    "common.services.inventory.atrisk.service": "js/common/services/inventory/atrisk.service",
    "common.services.inventory.products.service": "js/common/services/inventory/products.service",
    "common.services.inventory.inventory_projection.service": "js/common/services/inventory/inventory_projection.service",
    "common.services.inventory.supply_and_demand_history.service": "js/common/services/inventory/supply_and_demand_history.service",
    "common.services.inventory.inventory_details.service": "js/common/services/inventory/inventory_details.service",
    "common.services.inventory.charting.product_inventory_chart.service": "js/common/services/inventory/charting/product_inventory_chart.service",
    
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

System.import('app').catch(console.error.bind(console));
