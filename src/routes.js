export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/pizza-list');

  $stateProvider
    .state('pizzaList', {
      url: '/pizza-list',
      component: 'pizzaList',
      linkName: 'Main',
    })
    .state('cartList', {
      url: '/cart-list',
      component: 'cartList',
      linkName: 'Cart',
    })
    .state('history', {
      url: '/history',
      component: 'history',
      linkName: 'History',
    });
}
