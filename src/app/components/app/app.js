class AppController {
  constructor(OrdersService) {
    this.ordersService = OrdersService;
  }

  $onInit() {
    console.log('this', this);
  }
}

export const App = {
  templateUrl: 'src/app/components/app/app.html',
  controller: AppController
};
