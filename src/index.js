import angular from 'angular';
import 'angular-aria';
import 'angular-animate';
import 'angular-messages';
import 'angular-ui-router';
import 'angular-ui-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css!';

import commonModule from './app/common/common.module';
import componentsModule from './app/components/components.module';

import routesConfig from './routes';
import { App } from './app/app.component/app.component';

angular
  .module('app', [
    // ngModules
    'ngAnimate',
    'ngAria',
    'ngMessages',
    // third-party modules
    'ui.router',
    'ui.bootstrap',
    // app modules
    commonModule,
    componentsModule,
  ])
  .config(routesConfig)
  .component('app', App);
