(function(){
	angular.module('app').factory('letterList', letterList);

	function letterList(){
		var letters = {};
		letters.alphabetInit = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
		letters.currentAlphabet = letters.alphabetInit;
		letters.toggleLetterOff = function(index){
			letters.currentAlphabet.splice(index,1);
		};
		letters.scroll = function(currentIndex){
			console.log("You clicked scroll " + currentIndex);
			switch(currentIndex){
				case 0:
					currentIndex = 300;
					break;
				case 300:
					currentIndex = 600;
					break;
				case 600:
					currentIndex = 0;
					break;
				default:
					currentIndex = 0;
			}
			return currentIndex;
		};

		return letters;
	}
})();