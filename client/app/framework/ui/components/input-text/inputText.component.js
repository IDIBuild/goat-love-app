import template from './inputText.html';
import controller from './inputText.controller';
import InputFactory from '../../core/base-input';

let inputTextComponent = {
  template,
  controller,
  mainElement : 'input'
};


export default InputFactory.build(inputTextComponent);