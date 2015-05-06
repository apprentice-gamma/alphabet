(function(){
	angular.module('app').factory('letterList', letterList);

	function letterList(){
		var letters = {};
		letters.alphabetInit = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
		letters.currentAlphabet = letters.alphabetInit;
		letters.toggleLetterOff = function(index){
			letters.currentAlphabet.splice(index,1);
		};
		letters.scroll = function(){
			var scrollSplice = letters.currentAlphabet.splice(0,8);
			console.log(scrollSplice);
			var newCurrentAlphabet = letters.currentAlphabet.concat(scrollSplice);
			letters.currentAlphabet = newCurrentAlphabet;
			console.log("You clicked scroll " + letters.currentAlphabet);
			return letters.currentAlphabet;
		};

		return letters;
	}
})();