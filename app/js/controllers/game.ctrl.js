angular.module('app').controller('GameCtrl', GameCtrl);

function GameCtrl(letterList) {
	var game = this;
	game.letterSet = letterList.currentAlphabet;
	game.toggleLetterOff = letterList.toggleLetterOff;
	game.scroll = function(){
		var newCurrentAlphabet = letterList.scroll();
		game.letterSet = newCurrentAlphabet;
	};
}
