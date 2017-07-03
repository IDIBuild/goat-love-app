import controller from './scrollable.controller';

let scrollableComponent = {
  controller : controller,
  restrict: 'E',
  bindings: {
    event : "<"
  },
};


export default scrollableComponent;