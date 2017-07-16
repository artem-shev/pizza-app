import { recipes } from './pizza.data.js';

const h1 = '{"cart":[{"name":"peperoni","ingredients":["peperoni","tomato","mozzarella","parmejano"],"price":7},{"name":"meat","ingredients":["bacon","tomato","mozzarella","ham","salami"],"price":12}],"price":19,"date":"2017-07-16T11:26:39.518Z"}'
const h2 = '{"cart":[{"name":"peperoni","ingredients":["peperoni","tomato","mozzarella","parmejano"],"price":7},{"name":"meat","ingredients":["bacon","tomato","mozzarella","ham","salami"],"price":12}],"price":19,"date":"2017-07-16T11:35:37.969Z"}'

export class OrdersService {
  constructor($q) {
    'ngInject';

    this.q = $q;

    this.history = [JSON.parse(h1), JSON.parse(h2)]
    // this.history = [];

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
