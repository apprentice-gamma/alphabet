(function(){
	angular.module('app').factory('appFactory', appFactory);

	function appFactory(){
		var appfactory = {};
		
		appfactory.currentValue = NaN;
		appfactory.modalToggleValue = function(value){
			var currentValue = value;
			appfactory.currentValue = value;
			return currentValue;
		};
	
		console.log("0 - Modal value is currently set at " + appfactory.modalToggleValue());

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