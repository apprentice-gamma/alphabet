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
		addpoint : "Which player found the letter?",
		title : "The Alphabet Game"
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
	app.toggleLetterOff = function(index){
			//set up a tapped state to let the user be aware that they have successfully tapped the letter. Use a delay and inactive state to mimic something being pushed, and then vanishing.
			
			letterList.currentAlphabet.splice(index,1);
			app.assignScore();
			console.log("You tapped toggleletteroff");
		};
	//console.log("0-1 - appCtrl modalToggle value is currently set at " + app.modalToggle );
}

