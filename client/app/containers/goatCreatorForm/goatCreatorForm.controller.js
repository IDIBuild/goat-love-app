
class GotCreatorFormController {

  constructor($state, GoatsService, $mdToast ,$log) {
    "ngInject";
    this.$state   = $state;
    this.GoatsService = GoatsService;
    this.$mdToast = $mdToast;
    this.$log = $log;
  }

  $onInit() {
    this.bla="fsfsfsf";
    // init the form data
    this.goat = {};
  }


  // see API https://angular.io/docs/ts/latest/api/core/index/SimpleChange-class.html
  $onChanges(change) {
    var event = change.event;
    console.log(event);

  }


  blaChanged() {
    console.log("bla changed !!!");
  }



  resetForm() {
    // reset form and disable error messages
    this.updateContactForm.$setPristine();
    this.updateContactForm.$setUntouched();
  }

  // will handle the form submission,
  // validates the required field and then adds the goat to the service.
  // once added, we will go to the next page.
  addGoat() {

    angular.forEach(this.updateContactForm, function(value, key) {
      if(key[0] == '$') return;
        console.log(key, value.$pristine)
    });

    if (!this.updateContactForm.$valid) {
      this.$log.error("got validation errors in form !!!!");
      this.$mdToast.show(
          this.$mdToast.simple()
              .textContent('Please fix Form !!!')
              .toastClass('error-toast')
              .position('top center')  // or 'bottom center
              .hideDelay(3000)
      );
      return;
    }

    this.GoatsService.createGoat(this.goat);

    // reset the form
    this.goat = {};

    // go to home page, to see our entry
    this.$state.go('app.home');
  }

  checkIfUpdating() {
    return this.GoatsService.isUpdateMode();
  }
}

export default GotCreatorFormController;