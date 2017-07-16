class CartListController {
  constructor(OrdersService) {
    'ngInject';

    this.ordersService = OrdersService;
  }

  $onInit() {
    this.title = 'Current cart';
    this.errorMsg = 'Current cart is empty';
    this.totalPrice = 0;
    this.tableTitles = [
      { name: 'Number', classes: 'text-center w-100' },
      { name: 'Name', classes: 'text-center' },
      { name: 'Price', classes: 'text-center', isSorter: true },
      { name: 'Remove from cart', classes: 'text-center w-150' },
    ];

    this.ordersService.getCurrentCart()
      .then((response) => {
        this.currentCart = response.data;
        this.getTotalPrice(this.currentCart);
      });
  }

  getTotalPrice(cart) {
    this.totalPrice = cart.reduce((prevVal, currentItem) => prevVal + currentItem.price, 0);
  }

  removeFromCart(index) {
    this.ordersService.removeFromCart(index)
      .then(() => {
        this.currentCart.splice(index, 1);
        this.getTotalPrice(this.currentCart);
        console.log('item was removed');
      });
  }

  makeOrder() {
    this.ordersService.makeOrder(this.currentCart, this.totalPrice)
      .then((response) => {
        if (response.data) {
          this.currentCart = [];
          this.getTotalPrice(this.currentCart);
          console.log('order are placed');
        }
      });
  }
}

export const CartListComponent = {
  controller: CartListController,
  templateUrl: 'app/components/cart-list/cart-list.html',
};
