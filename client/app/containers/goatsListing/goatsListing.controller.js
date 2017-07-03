class GoatsListingController {
  constructor(GoatsService ,MsgService) {
    "ngInject";

    // This will keep the service instance across our class
    this.GoatsService = GoatsService;
    this.MsgService = MsgService;
  }


  $onDestroy() {
    console.log('got event $onDestroy !!!!');
    this.subscription.unsubscribe();
  }


  // This method will be called each time the component will be initialised,
  // In our case, it will be called for every page route change.
  $onInit(){
    this.radioSelect = 5;
    this.bla = "gsdgsdgsdg";
    this.goatsList =this.GoatsService.getGoats();
     this.subscription = this.MsgService.subscribe('goatAdded',(obj) => {
       console.log('got event !!!!' , obj);
     });

  }
}

export default GoatsListingController;
