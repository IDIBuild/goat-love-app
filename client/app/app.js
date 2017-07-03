
// Infrastructure
import angular      from 'angular';
import uiRouter     from 'angular-ui-router';
import ngMaterial   from 'angular-material';
import ngMessages   from 'angular-messages';
import 'framework-utils';

// UI Infra
import 'angular-animate';
import 'angular-aria';
import uiModule from './framework/ui/ui-module.js';
import angularUtils from './framework/angular-utils';

// Routing Config
import routing from './app.config';

// Components
import AppComponent from './app.component';
import NavigationComponent from './components/navigation/navigation';
import HomeComponent from './pages/home/home';
import CreateComponent from './pages/create/create';
import validatorsModule from './services/validators/validators';
import frameworkModule from './framework/framework'

// Services
import GoatsService from './services/GoatsService';

// Styles frameworks
import 'normalize.css';
import 'angular-material/angular-material.css'
import 'bootstrap/dist/css/bootstrap.css';

angular
    .module('app', [
            uiRouter,
            ngMaterial,
            ngMessages,
            'idi-framework',
            uiModule.name,
            frameworkModule.name,
            validatorsModule.name,
            NavigationComponent.name,
            CreateComponent.name,
            HomeComponent.name
    ])
    .config(routing)
    .component('app', AppComponent)
    .service('GoatsService', GoatsService)
    .run(function ($injector) {
        angularUtils.setInjector($injector);
    });


angular.element(document).ready(() => {
        // load configuration
        $.get('/resources/server_configuration.json', (response) => {
                angular.module('app').config((configurationProvider) => {
                        configurationProvider.initialize(response);
                });
                angular.bootstrap(document, ['app']);
        });
});