class HeaderController {
  /** @ngInject */
  constructor() {}
}

export const Header = {
  templateUrl: 'src/app/components/header/header.html',
  controller: HeaderController,
  bindings: {
    todos: '='
  }
};
