angular.module('app').controller('GameCtrl', GameCtrl);

function GameCtrl(letterList) {
	var game = this;
	game.letterSet = letterList.currentAlphabet;
	game.toggleLetterOff = letterList.toggleLetterOff;
	game.scrollOffset = 0;
	game.scroll =  function(){
		game.scrollOffset = letterList.scroll(game.scrollOffset);
		console.log(game.scrollOffset);
	};
}
