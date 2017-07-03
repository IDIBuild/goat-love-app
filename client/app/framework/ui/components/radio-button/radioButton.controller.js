class RadioButtonController {

	constructor() {
		'ngInject';
	}


	$onInit() {
		//dummy data
		this.listValues = [
			{ key : 5 , value : "sdgs"},
			{ key : 7 , value : "sffff"},
		];
	}


	$onDestroy() {
		console.log("got $onDestroy ....");
	}

}

export default RadioButtonController;