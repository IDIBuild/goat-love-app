import copyAttributes   from './config/copy-attrs.json';
import angularUtils     from '../../angular-utils';

function parseTemplate(template) {
	return $('<div></div>').html(template);
}

function addLabel (component) {
	component.template =  `
            <label>{{::vm.label}}</label>
       ` + component.template;
}

let baseInputComponent = {
	restrict: 'E',
	bindings: {
		label : "@",
		ngModel:'=',

	},
	require : {ngModelCtrl : 'ngModel'},
	controllerAs: 'vm',
	validations : ['required']
};

export default {
	build : function (component) {
		addLabel(component);

		let obj = angular.extend(component ,baseInputComponent);
		let template = component.template;

		obj.template = ($element, $attrs ) => {

			let validatorUtils = angularUtils.getService('validatorUtils');

			// get main element
			var templateElement = parseTemplate(template);
			var mainElement = $($(templateElement).find(obj.mainElement)[0]);

			//add aria label
			mainElement.attr("aria-label", "text input");

			//todo -refactor to use ValidatoService !!!
			// copy all input based attributes
			for (let i = 0; i < copyAttributes.length; i++) {
				let attr = copyAttributes[i];
				mainElement.attr(attr, $attrs[$.camelCase(attr)]);
			}

			//todo - use ng-if='vm.ngModelCtrl.$dirty' to check validation while typing...

			// load validators messages
			let ngMessages = document.createElement('div');
			ngMessages.setAttribute('ng-messages' ,'vm.ngModelCtrl.$error');
			ngMessages.setAttribute('role' ,'alert');

			Object.keys($attrs).forEach(function(key) {
				var attr = $.camelCase(key);
				var messages = validatorUtils.getMessages(attr);
				if (messages) {

					for (let [key, value] of Object.entries(messages)) {
						let msg = document.createElement('div');
						msg.setAttribute('ng-message' ,key);
						msg.textContent  = value;
						ngMessages.appendChild(msg);
					}
				}
			});

			let html = templateElement.html();
			html = html.replace('<messages></messages>' ,ngMessages.outerHTML);

			return html;
		};

		return obj;
	}

};
