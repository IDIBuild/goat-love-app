import template from './radioButton.html';
import controller from './radioButton.controller';
import InputFactory from '../../core/base-input';

let radioButtonComponent = {
  template,
  controller,
  mainElement : 'md-radio-group',
  bindings: {
    listValues : "<"
  }
};

export default InputFactory.build(radioButtonComponent);