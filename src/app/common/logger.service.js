export class Logger {
  constructor($log, toastr) {
    'ngInject';

    this.$log = $log;
    this.toastr = toastr;
  }

  log(message, data) {
    this.$log.log(message, data);
  }

  info(message, data, title) {
    this.toastr.info(message, title);
    this.$log.info(`Info: ${message}`, data);
  }

  success(message, data, title) {
    this.toastr.success(message, title);
    this.$log.info(`Success: ${message}`, data);
  }

  warning(message, data, title) {
    this.toastr.warning(message, title);
    this.$log.warn(`Warning: ${message}`, data);
  }

  error(message, data, title) {
    this.toastr.error(message, title);
    this.$log.error(`Error: ${message}`, data);
  }
}
