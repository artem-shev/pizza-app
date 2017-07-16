class AppController {
  constructor() {
    // this.ordersService = OrdersService;
  }

  $onInit() {
    console.log('this', this);
  }
}

export const App = {
  templateUrl: 'app/app.component/app.html',
  controller: AppController
};
