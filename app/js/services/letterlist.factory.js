(function(){
	angular.module('app').factory('letterList', letterList);

	function letterList(){
		
		var letters = {};
		letters.alphabetInit = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
		letters.currentAlphabet = letters.alphabetInit;
		//letters.tapped = null;
		
		letters.scroll = function(){
			var scrollSplice = letters.currentAlphabet.splice(0,8);
			var newCurrentAlphabet = letters.currentAlphabet.concat(scrollSplice);
			letters.currentAlphabet = newCurrentAlphabet;

			return letters.currentAlphabet;
		};

		return letters;
	}
})();