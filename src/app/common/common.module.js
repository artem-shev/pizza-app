import angular from 'angular';

import { OrdersService } from './orders.service';

export default angular
  .module('app.common', [])
  .service('OrdersService', OrdersService)
  .name;
