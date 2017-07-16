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
    return this.q.resolve({ data: true })
      .then((response) => {
        this.cart.push(recipe);
        return response;
      });
  }

  getCurrentCart() {
    return this.q.resolve({ data: this.cart });
  }

  removeFromCart(index) {
    return this.q.resolve({ data: true })
      .then((response) => {
        this.cart.splice(index, 1);
        return response;
      });
  }

  makeOrder(cart, price) {
    const date = new Date();
    const order = { cart, price, date };
    return this.q.resolve({ data: true })
      .then((response) => {
        this.history.push(order);
        this.cart = [];
        return response;
      });
  }

  getHistory() {
    return this.q.resolve({ data: this.history });
  }
}
