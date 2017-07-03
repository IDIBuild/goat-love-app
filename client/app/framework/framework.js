import angular            from 'angular';
import MsgService         from './msg-service';
import ValidatorUtils     from './ui/validators/validator-utils';

import 'object.entries';
import './ai-logger';
import 'angular-input-modified';

let frameworkModule = angular.module('framework', ['ai.public.logger' ,'ai.public.serverLogger' ,'ngInputModified']);

// register RxJS based event bus
frameworkModule.factory('MsgService' ,() => new MsgService);

frameworkModule.factory('validatorUtils' ,() => new ValidatorUtils);

// register custom material themes
frameworkModule.config(function ($mdThemingProvider) {
    'ngInject';
});


// configure logger
// get more API - https://github.com/AquaticInformatics/angular-logger
frameworkModule.config(function (AiLoggerProvider, AiServerLoggerProvider) {
    'ngInject';
    AiServerLoggerProvider.setServerPostEndPoint('http://localhost:3000/logs');
    AiServerLoggerProvider.setQueueSize(2);
    AiServerLoggerProvider.setPostToServerDelay(3000);

    AiLoggerProvider.setAppName('aiLoggerDemoApp');
    AiLoggerProvider.setLogLevel('trace');
    AiLoggerProvider.setMessageFormat('%1$s  %2$-7s  %3$s - %4$s');
});

// configure default exception handler
frameworkModule.config(function($provide) {
    'ngInject';
    $provide.decorator('$exceptionHandler', ['$log', '$delegate',
        function($log, $delegate) {
            return function(exception, cause) {
                // todo eladh - forward to 3rd logger solution + consider using stacktrace.js
                // $log.debug('Default exception handler.' ,exception);
                $delegate(exception, cause);
            };
        }
    ]);
});


//todo eladh - load server based configuration
// in this point we will load all global/session config
// and also the tab ID manager !!!
frameworkModule.provider('configuration', function() {
    let configurationData;

    this.initialize = (data) => {
        configurationData = data;
    };

    this.$get = () => {
        return configurationData;
    };
});


//todo eladh support polifils for isInteger isNaN

//todo eladh - refactor tab requirment


//todo eladh - from angular 1.5->2 https://medium.com/@LeonardoBrAu/from-angular-1-5-to-angular-2-what-else-can-you-do-today-7374814b33ac
// todo

export default frameworkModule;


/*
 todo Support rest : API / Caching / Header /Error handling....
 todo move away from Promises and use Observables !!

 */