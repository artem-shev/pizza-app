import { recipes } from './pizza.data.js';

export class OrdersService {
  constructor() {
    this.availablePizza = recipes;
    console.log('recipes', recipes);
  }
}
