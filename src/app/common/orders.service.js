import { recipes } from './pizza.data.js';

export class OrdersService {
  constructor($q) {
    'ngInject';

    this.q = $q;

    this.history = [];

    this.cart = [
      {name: 'peperoni', ingredients: ['peperoni', 'tomato', 'mozzarella', 'parmejano'], price: 7.00},
      {name: 'meat', ingredients: ['bacon', 'tomato', 'mozzarella', 'ham', 'salami'], price: 12.00},
    ];
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
    const order = {
      cart,
      price,
      time: new Date(),
    };
    console.log('order', order);
    this.history.push(order);
    this.cart = [];
    return this.q.resolve({ data: true });
  }
}
