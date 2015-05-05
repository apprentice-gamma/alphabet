(function(){
	angular.module('app').factory('letterList', letterList);

	function letterList(){
		var letters = {};
		letters.alphabetInit = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
		letters.currentAlphabet = letters.alphabetInit;
		letters.toggleLetterOff = function(index){
			console.log("You toggled me off!");
			letters.currentAlphabet.splice(index,1);


			console.log("You toggled me off!" + letters.currentAlphabet);
		};

		return letters;
	}
})();