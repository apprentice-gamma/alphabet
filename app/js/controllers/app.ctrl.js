angular.module('app').controller('AppCtrl', AppCtrl);

function AppCtrl() {
	var app = this;
	app.title = "The Alphabet Game";
	app.messages = {
			"pause": "Your game has been saved.",
			"quit": "Quit",
			"resume": "Resume"
		};
}
