angular.module('app').controller('GameCtrl', GameCtrl);

function GameCtrl(letterList) {
	var game = this;
	game.sidebar = "Put the sidebar here.";
	game.letterSet = letterList.currentAlphabet;
	game.toggleLetterOff = letterList.toggleLetterOff;
}
