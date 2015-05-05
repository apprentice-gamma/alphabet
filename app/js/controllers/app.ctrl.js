angular.module('app').controller('AppCtrl', AppCtrl);
function AppCtrl() {
	var vm = this;
	vm.title = "The Alphabet Game";
	console.log('You are in the app controller');
}
