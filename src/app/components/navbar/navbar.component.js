class NavbarController {
  constructor($state) {
    'ngInject';

    this.state = $state;
  }

  $onInit() {
    this.states = this.state.get()
      .filter(state => !!state.name);
  }
}

export const NavbarComponent = {
  templateUrl: 'app/components/navbar/navbar.html',
  controller: NavbarController,
  bindings: {},
};
