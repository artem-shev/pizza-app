import angular from 'angular';

import { OrdersService } from './orders.service';
import { SupportService } from './support.service';
import { Logger } from './logger.service';

export default angular
  .module('app.common', [])
  .service('OrdersService', OrdersService)
  .service('SupportService', SupportService)
  .service('logger', Logger)
  .name;
