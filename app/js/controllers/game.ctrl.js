angular.module('app').controller('GameCtrl', GameCtrl);

function GameCtrl(letterList, appFactory) {
	var game = this;
	game.letterSet = letterList.currentAlphabet;
	game.toggleLetterOff = letterList.toggleLetterOff;
	game.scroll = function(){
		var newCurrentAlphabet = letterList.scroll();
		game.letterSet = newCurrentAlphabet;
	};
	game.player = function(name, score){
		this.name = name;
		this.score = score;
	};
	//game.tapped = letterList.tapped;
}
