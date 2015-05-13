angular.module('app').controller('AppCtrl', AppCtrl);

function AppCtrl(appFactory) {
	var app = this;
	app.messages = {
		"pause": "Your game has been saved",
		"addpoint" : "Which player found the letter?",
		"title": "The Alphabet Game"
	};
	app.modalOptions = {
			quit: {
				value : "Quit",
				behavior :  function(){
					console.log("You clicked Quit.");
				}
			},
			pause: {
				value : "Resume game",
				behavior : function(){
						app.modalToggle = false;
						console.log("You clicked resume and set the toggle to " + app.modalToggle );
				}
			}
		};
	app.modalToggle = false;
	app.modalMessage = "Test message.";
	app.modal = function(message){
		app.modalToggle = !app.modalToggle;
		console.log('1 - appCtrl dot modal - toggle value is ' + app.modalToggle);
		app.modalMessage = message;

		//app.modalOptions = app.modalOptions.option.value;
		//console.log("The modal options values are:\n" + app.modalOptions.quit.value + '\n' + app.modalOptions.quit.behavior);
	};
	//app.testValue = appFactory.currentValue;
	
	
	console.log("0-1 - appCtrl modalToggle value is currently set at " + app.modalToggle );
}