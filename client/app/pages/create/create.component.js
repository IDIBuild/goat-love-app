import template from './create.html';
import controller from './create.controller';

let createComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'creator'
};

export default createComponent;
