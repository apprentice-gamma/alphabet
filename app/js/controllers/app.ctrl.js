angular.module('app').controller('AppCtrl', AppCtrl);

function AppCtrl(appFactory) {
	var app = this;
	app.modalToggle = false;
	app.modal = function(){
		app.modalToggle = appFactory.modalWindow();
		console.log('1 - appCtrl dot modal - toggle value is ' + app.modalToggle);
		app.modalMessage = appFactory.modalMessage;
		app.modalOptions = appFactory.modalOptions;
		console.log("The modal options values are:\n" + app.modalOptions.quit.value + '\n' + app.modalOptions.quit.behavior);
	};
	console.log("0-1 - appCtrl modalToggle value is currently set at " + app.modalToggle );
}