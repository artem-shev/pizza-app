class NavbarController {
  /** @ngInject */
  constructor() {}
}

export const NavbarComponent = {
  templateUrl: 'app/components/navbar/navbar.html',
  controller: NavbarController,
  bindings: {
    todos: '='
  }
};
