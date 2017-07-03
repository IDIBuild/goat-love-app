import dictionary   from './dictionary.json';
import angularUtils from '../../../framework/angular-utils';

class StrongSecretValidator {
    constructor() {
        this.require = 'ngModel';
        angularUtils.getService('validatorUtils').addMessages("strongSecretValidator" ,dictionary);
    }

    link($scope, $element ,attrs ,ctrl) {
        ctrl.$validators.strongSecretValidator = function (ngModelValue) {
            if (!ngModelValue)
                return true;

            if (/[A-Z]/.test(ngModelValue)) {
                ctrl.$setValidity('uppercaseValidator', true);
            } else {
                ctrl.$setValidity('uppercaseValidator', false);
            }
            if (/[0-9]/.test(ngModelValue)) {
                ctrl.$setValidity('numberValidator', true);
            } else {
                ctrl.$setValidity('numberValidator', false);
            }
            if (ngModelValue.length === 6) {
                ctrl.$setValidity('sixCharactersValidator', true);
            } else {
                ctrl.$setValidity('sixCharactersValidator', false);
            }
            return ngModelValue;
        };
    };

}

export default StrongSecretValidator;