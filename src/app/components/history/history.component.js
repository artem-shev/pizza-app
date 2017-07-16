class HistoryController {
  constructor(OrdersService, SupportService) {
    'ngInject';

    this.supportService = SupportService;
    this.ordersService = OrdersService;
  }

  $onInit() {
    this.title = 'History of orders';
    this.errorMsg = 'History is empty';
    this.sorter = {
      prop: 'date',
      isReversed: false,
    };

    this.tableTitles = [
      { name: 'Number', classes: 'text-center w-100' },
      { name: 'Items', classes: 'text-center' },
      { name: 'Price', classes: 'text-center', isSorter: true },
      { name: 'Date', classes: 'text-center w-150', isSorter: true },
    ];

    this.ordersService.getHistory()
      .then((response) => {
        this.history = response.data.map((order) => {
          order.items = order.cart
            .map(item => item.name)
            .join(', ');
          return order;
        });
      });
  }

  setSorter(propName) {
    this.sorter = this.supportService.setSorter(this.sorter, propName);
  }

  getSortDirection(title) {
    return this.supportService.getSortDirection(this.sorter, title);
  }
}

export const HistoryComponent = {
  controller: HistoryController,
  templateUrl: 'app/components/history/history.html',
};
