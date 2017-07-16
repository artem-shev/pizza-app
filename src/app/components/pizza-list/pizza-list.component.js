class PizzaListController {
  constructor(OrdersService, SupportService, logger) {
    'ngInject';

    this.supportService = SupportService;
    this.ordersService = OrdersService;
    this.logger = logger;
  }

  $onInit() {
    this.title = 'List of available Pizza';
    this.nameQuery = '';
    this.sorter = {
      prop: 'price',
      isReversed: true,
    };
    this.tableTitles = [
      { name: 'Number', classes: 'text-center w-100' },
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
    this.sorter = this.supportService.setSorter(this.sorter, propName);
  }

  addToCart(recipe) {
    this.ordersService.addToCart(recipe)
      .then((response) => {
        if (response.data) {
          this.logger.success('Item was added to cart!');
        }
      });
  }

  getSortDirection(title) {
    return this.supportService.getSortDirection(this.sorter, title);
  }
}

export const PizzaListComponent = {
  controller: PizzaListController,
  templateUrl: 'app/components/pizza-list/pizza-list.html',
};
