export default function routing ($locationProvider, $stateProvider, $urlRouterProvider) {
    'ngInject';
    // Define our app routing, we will keep our layout inside the app component
    // The layout route will be abstract and it will hold all of our app views
    $stateProvider
        .state('app', {
            url: '/app',
            abstract: true,
            template: '<app></app>'
        })

        // Dashboard page to contain our goats list page
        .state('app.home', {
            url: '/home',
            template: '<home></home>'
        })

        // Create route for our goat listings creator
        .state('app.create', {
            url: '/create',
            template: '<create></create>'
        });

    $urlRouterProvider.otherwise('/app/home');
};