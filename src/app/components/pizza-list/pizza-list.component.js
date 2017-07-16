import angular from 'angular';

class PizzaListController {
  constructor() {
    'ngInject';
  }
}

export const PizzaListComponent = {
  controller: PizzaListController,
  templateUrl: 'app/components/pizza-list/pizza-list.html',
};
