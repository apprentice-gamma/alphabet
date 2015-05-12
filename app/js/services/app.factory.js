(function(){
	angular.module('app').factory('appFactory', appFactory);

	function appFactory(){
		var appfactory = {};
		appfactory.messages = {
			"pause": "Your game has been saved",
			"title": "The Alphabet Game"
		};
		appfactory.modalToggleValue = function(value){
			var currentValue = value;
			return currentValue;
		};
	
		console.log("0 - Modal value is currently set at " + appfactory.modalToggleValue());
		
		appfactory.modalOptions = {
			quit: {
			"value": "Quit",
			"behavior":  "Quit the app - this is a placeholder for actual behavior" },
			resume: {
			"value": "Resume",
			"behavior": "Resume the game - this is a placeholder for actual behavior"
			}
		};

		appfactory.modalWindow = function(){
			var modalWindow = {};
			console.log('2 - Entering appfactory dot modalWindow');
			var currentValue = appfactory.modalToggleValue(true);
			console.log("3 - Modal value is currently set at " + currentValue);

			appfactory.modalMessage = appfactory.messages.pause;
			console.log("4 - The value of the message is " + appfactory.modalMessage);
			
			return currentValue;
		};

		return appfactory;
	}
})();