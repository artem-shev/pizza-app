class NavbarController {
  constructor($state, $transitions) {
    'ngInject';

    this.state = $state;
    this.transitions = $transitions;
  }

  $onInit() {
    this.isCollapsed = true;
    this.states = this.state.get()
      .filter(state => !!state.name);

    this.transitions.onSuccess({}, () => {
      if (!this.isCollapsed) {
        this.isCollapsed = true;
      }
    });
  }

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }
}

export const NavbarComponent = {
  templateUrl: 'app/components/navbar/navbar.html',
  controller: NavbarController,
  bindings: {},
};
