angular.module('app').controller('scoreCtrl', scoreCtrl);

function scoreCtrl($state){
	
	console.log('We are in the score controller.');
	var score = this;
	score.players = [
		{	label: "playerone",
			name: "Player One",
			iconurl: "/img/ic-playerone.png",
			score: 0
		},
		{	label: "playertwo",
			name: "Player Two",
			iconurl: "/img/ic-playertwo.png",
			score: 0
		},
		{	label: "playerthree",
			name: "Player Three",
			iconurl: "/img/ic-playerthree.png",
			score: 0
		},
		{	label: "playerfour",
			name: "Player Four",
			iconurl: "/img/ic-playerfour.png",
			score: 0
		}
	];
	score.addScore = function(playerLabel){
		
		for( var players = score.players, i = 0; i < players.length; i++ ) {
			if( players[i].label === playerLabel ){
				players[i].score ++;

				console.log(playerLabel + " Loop " + i + ", players dot length is " + players.length + " " + players[i].label + "\'s score is " + players[i].score);
			}
			$state.go("game");
		}
		//save score
	};
}

