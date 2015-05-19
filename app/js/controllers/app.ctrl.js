angular.module('app').controller('AppCtrl', AppCtrl);

function AppCtrl($state, letterList, appFactory) {

	var app = this;
	app.modalToggle = false;
	app.modalMessage = "Test message.";
	app.modal = function(message){
		app.modalToggle = !app.modalToggle;
		console.log('1 - appCtrl dot modal - toggle value is ' + app.modalToggle);
		app.modalMessage = message;
	};
	app.messages = {
		pause: "Your game has been saved",
		addpoint : "Which player found the letter?"
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
	app.assignScore = function(){
		$state.go("score");
		console.log("You just moved to the score page");
	};
	app.saveGame = function(dataName, dataObject){
		localStorage.setItem("dataName", dataObject);
		var test = localStorage.getItem("dataName");
		console.log("Just stored the item " + test);
	};
	app.tapped = null;
	app.toggleLetterOff = function(index){
		app.tapped = index;
		console.log(app.tapped);
		setTimeout(function() { 
			app.tapped = null;
			app.assignScore();
			letterList.currentAlphabet.splice(index,1); }, 
			600);
		
		console.log("You tapped toggleletteroff");
	};
}

