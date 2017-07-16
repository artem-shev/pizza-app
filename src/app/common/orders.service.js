import { recipes } from './pizza.data.js';

export class OrdersService {
  constructor($q) {
    'ngInject';

    this.q = $q;

    this.history = [];
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

  getCurrentCart() {
    return this.q.resolve({ data: this.cart });
  }

  removeFromCart(index) {
    this.cart.splice(index, 1);
    return this.q.resolve({ data: true });
  }

  makeOrder(cart, price) {
    const date = new Date();
    const order = { cart, price, date };
    this.history.push(order);
    this.cart = [];
    return this.q.resolve({ data: true });
  }

  getHistory() {
    return this.q.resolve({ data: this.history });
  }
}
