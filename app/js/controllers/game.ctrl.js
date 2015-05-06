angular.module('app').controller('GameCtrl', GameCtrl);

function GameCtrl(letterList) {
	var game = this;
	game.letterSet = letterList.currentAlphabet;
	game.toggleLetterOff = letterList.toggleLetterOff;
	game.scroll = function(){
		var newCurrentAlphabet = letterList.scroll();
		console.log("One - The controller thinks it is " + newCurrentAlphabet);
		game.letterSet = newCurrentAlphabet;
		console.log("Two- The controller thinks it is " + game.letterSet);
	};
}
