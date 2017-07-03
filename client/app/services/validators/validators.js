import angular                       from 'angular';
import StrongSecretValidator  from './common/strong-secret';

let validationModule = angular.module('validators', ['framework'])
    .directive('strongSecretValidator', () => new StrongSecretValidator);

export default validationModule;
