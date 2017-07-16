import angular from 'angular';

class PizzaListController {
  constructor(OrdersService) {
    'ngInject';

    this.ordersService = OrdersService;
  }

  $onInit() {
    this.nameQuery = '';
    this.sorter = {
      prop: 'price',
      isReversed: true,
    };
    this.tableTitles = [
      { name: 'Number', classes: 'text-center' },
      { name: 'Name', classes: 'text-center' },
      { name: 'Ingredients', classes: 'text-center' },
      { name: 'Price', classes: 'text-center', isSorter: true },
      { name: 'Add to cart', classes: 'text-center' },
    ];

    this.ordersService.getAvailableRecipes()
      .then((response) => {
        this.availableRecipes = response.data
          .map((recipe) => {
            recipe.ingredientsString = recipe.ingredients.join(', ');
            return recipe;
          });
      });
  }

  setSorter(propName) {
    const prop = propName.toLowerCase();
    if (this.sorter.prop === prop) {
      this.sorter.isReversed = !this.sorter.isReversed;
    } else {
      this.sorter.prop = prop;
      this.sorter.isReversed = false;
    }
  }

  addToCart(recipe) {
    this.ordersService.addToCart(recipe)
      .then((response) => {
        if (response.data) {
          console.log('recipe was added to cart');
        }
      });
  }
}

export const PizzaListComponent = {
  controller: PizzaListController,
  templateUrl: 'app/components/pizza-list/pizza-list.html',
};
