import AtRiskService from 'common.services.inventory.atrisk.service';
import InventoryProjectionService from 'common.services.inventory.inventory_projection.service';
import ProductsService from 'common.services.inventory.products.service';
import SupplyAndDemandHistoryService from 'common.services.inventory.supply_and_demand_history.service';
import InventoryDetailsService from 'common.services.inventory.inventory_details.service';
import ProductInventoryChartService from 'common.services.inventory.charting.product_inventory_chart.service';
import ProductProjectionModalService from 'common.services.inventory.ui.product_projection_modal.service';
import TweaksService from 'common.services.inventory.tweaks.service';

import ProductInventoryRiskOverTimeChartService from 'common.services.inventory.charting.product_inventory_risk_over_time_chart.service';

var moduleName = 'common.services.inventory';

angular.module(moduleName, ['ngResource'])
  .service('ProductsService', ProductsService)
  .service('InventoryProjectionService', InventoryProjectionService)
  .service('AtRiskService', AtRiskService)
  .service('TweaksService', TweaksService)
  .service('SupplyAndDemandHistoryService', SupplyAndDemandHistoryService)
  .service('InventoryDetailsService', InventoryDetailsService)
  .service('ProductInventoryChartService', ProductInventoryChartService)
  .service('ProductInventoryRiskOverTimeChartService', ProductInventoryRiskOverTimeChartService)
  .service('ProductProjectionModalService',ProductProjectionModalService);

export default moduleName;
