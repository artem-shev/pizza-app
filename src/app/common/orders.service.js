import { recipes } from './pizza.data.js';

export class OrdersService {
  constructor($q) {
    'ngInject';

    this.q = $q;

    this.cart = [];
  }

  getAvailableRecipes() {
    return this.q.resolve(recipes)
    .then((recipes) => {
      const response = {
        data: recipes,
      };
      this.availableRecipes = recipes;
      return response;
    });
  }

  addToCart(recipe) {
    this.cart.push(recipe);
    return this.q.resolve({ data: true });
  }
}
