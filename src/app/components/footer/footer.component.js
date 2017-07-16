class FooterController {
  $onInit() {
    this.message = 'Developed by Artem Shevliakov in 2017.';
  }
}

export const FooterComponent = {
  templateUrl: 'app/components/footer/footer.html',
  controller: FooterController,
  bindings: {}
};
