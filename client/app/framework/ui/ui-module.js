import angular from 'angular';

import inputTextComponent    from './components/input-text/inputText.component';
import scrollableComponent   from './components/scroll-to-me/scrollable.component';
import radioButtonComponent  from './components/radio-button/radioButton.component';

const uiModule = angular.module('uiModule', []);

uiModule.component('inputText', inputTextComponent);
uiModule.component('scrollable', scrollableComponent);
uiModule.component('radioButton' ,radioButtonComponent);

export default uiModule;
