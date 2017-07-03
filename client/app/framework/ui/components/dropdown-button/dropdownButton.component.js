import template from './dropdownButton.html';
import controller from './dropdownButton.controller';
import InputFactory from '../../core/base-input';

let dropdownButtonComponent = {
  template,
  controller,
  mainElement : 'input'
};


export default InputFactory.build(dropdownButtonComponent);