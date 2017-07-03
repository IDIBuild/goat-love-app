class HomeController {
  constructor() {
    "ngInject";
  }

  $onInit () {
    this.name = 'home';
    this.welcomeTitle = "Welcome to the Goatlove Home Page!";
  }
}

export default HomeController;
