import angular from 'angular';
import 'angular-aria';
import 'angular-animate';
import 'angular-messages';
import 'angular-ui-router';
import 'angular-ui-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css!';

import { OrdersService } from './app/common/orders.service.js';

import {App} from './app/components/app/app.js';
import {Header} from './app/components/header/header.js';
import {Footer} from './app/components/footer/footer.js';
import routesConfig from './routes.js';

angular
  .module('app', [
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'ui.router',
    'ui.bootstrap',
  ])
  .config(routesConfig)
  .component('app', App)
  .service('OrdersService', OrdersService)
  .component('headerComponent', Header)
  .component('footerComponent', Footer);
