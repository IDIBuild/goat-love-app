import template from './goatCreatorForm.html';
import controller from './goatCreatorForm.controller';

let gotCreatorFormComponent = {
  restrict: 'E',
  template,
  controller,
  bindings: {
    bla : "@"
  },
  controllerAs: 'vm'
};

export default gotCreatorFormComponent;


// What a screen needs :
// 1. UI Components - angular material based
// 2. support for 2 way data binding on by ngModel !!!!!
// 3. As much as possible use one Submit action per screen !!!
// 4. Support markup based validation/formatter/parser
// 5. use $onInit to retrieve any needed information
//     in allot of the cases the UI Router can be responsible for the screen/component state/data
//     then the component controller can inject the router $state data
// 6. use a world without $watchers !!! http://stackoverflow.com/questions/35534479/angularjs-1-5-component-does-not-support-watchers-what-is-the-work-around

// use ng-change instead of $watch - http://www.codelord.net/2015/06/11/using-ng-change-instead-of-%24watch-in-angular/

// replace $watch $onChange life-cycle hook : with http://www.codelord.net/2016/12/13/replacing-%24scope-dot-%24watch-with-lifecycle-hooks/

// investigate angular 1.6 changes - http://www.codelord.net/2017/01/01/angular-1-dot-6-is-here-what-you-need-to-know/


/*
So - every component should be as isolated as possible
communication will be able by using parent / child component bindings
the best way to detect / handle this kind of changes is by using angular
new life-cycle hook solution (see above for more details)

-the beauty with $onChange that we can take a general approach
to handle changes , we can see if its firstChange() or get the lastValue()
much simpler and cleaner approach then $watch API

todo eladh - maybe we can wrap it with more simpler API ?

-What about in a situation where you have a Service that's holding state
for example. How could I push changes to that Service, and other random components on the page
be aware of such a change?

RxJS event bus solution:

not reinvent - logic and validation mostly need to be performed
by using static markup validations and / or using the ng-change attribute handler
the form should have basic $onInit handle to handle its open mode
$onDestroy for cleanup of all used resources
$onSubmit - to handle any requests to the server


/* todo - we can also use angular 1.3 asyncValidators
   http://www.codelord.net/2014/11/02/angularjs-1-dot-3-taste-async-validators/
*/

//todo - how to handle server response ?
//if form can be submit - logic / validators / aysnc validators was OK
// send a POST Request to the server


//todo - eladh angular 1.6 https://toddmotto.com/angular-1-6-is-here#http-success-and-error

/* form lifecycle
1. generic validate before submit
2. for validation / action after User change use ng-click , ng-change...
3. for static validation - use markup validators

 */