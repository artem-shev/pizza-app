import { recipes } from './pizza.recipes.js';

export class OrdersService {
  constructor() {
    this.recipes = recipes;
    console.log('recipes', recipes);
  }
}
