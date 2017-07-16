import angular from 'angular';

import { CartListComponent } from './cart-list/cart-list.component';
import { HistoryComponent } from './history/history.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

export default angular
  .module('app.components', [])
  .component('navbar', NavbarComponent)
  .component('footer', FooterComponent)
  .component('pizzaList', PizzaListComponent)
  .component('cartList', CartListComponent)
  .component('history', HistoryComponent)
  .name;
