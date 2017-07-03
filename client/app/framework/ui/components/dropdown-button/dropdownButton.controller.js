class DropdownButtonComponentController {

	constructor() {
		'ngInject';
	}


	$onInit() {
		console.log("got $onInit ....");
	}

	$doCheck() {
	//	this.ngModelCtrl.$validate();
	}


	$onDestroy() {
		console.log("got $onDestroy ....");
	}

}

export default DropdownButtonComponentController;