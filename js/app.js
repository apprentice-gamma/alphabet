$traceurRuntime.ModuleStore.getAnonymousModule(function() {
  "use strict";
  angular.module('app', ['ngSanitize', 'ngResource', 'ui.router', 'oc.modal']).constant('VERSION', '0.7.0').config(function appConfig($stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider.hashPrefix('!');
    $urlRouterProvider.otherwise("/");
    $stateProvider.state('game', {
      url: "/",
      views: {"mainView": {templateUrl: "partials/game.html"}}
    }).state('score', {
      url: "/score",
      views: {"mainView": {templateUrl: "partials/score.html"}}
    });
    return $locationProvider.html5Mode(true);
  });
  return {};
});


$traceurRuntime.ModuleStore.getAnonymousModule(function() {
  "use strict";
  angular.module('app').controller('AppCtrl', AppCtrl);
  function AppCtrl($state, letterList, appFactory) {
    var app = this;
    app.modalToggle = false;
    app.modalMessage = "Test message.";
    app.modal = function(message) {
      app.modalToggle = !app.modalToggle;
      console.log('1 - appCtrl dot modal - toggle value is ' + app.modalToggle);
      app.modalMessage = message;
    };
    app.messages = {
      pause: "Your game has been saved",
      addpoint: "Which player found the letter?"
    };
    app.modalOptions = {
      quit: {
        value: "Quit",
        behavior: function() {
          console.log("You clicked Quit.");
        }
      },
      pause: {
        value: "Resume game",
        behavior: function() {
          app.modalToggle = false;
          console.log("You clicked resume and set the toggle to " + app.modalToggle);
        }
      }
    };
    app.assignScore = function() {
      $state.go("score");
      console.log("You just moved to the score page");
    };
    app.saveGame = function(dataName, dataObject) {
      localStorage.setItem("dataName", dataObject);
      var test = localStorage.getItem("dataName");
      console.log("Just stored the item " + test);
    };
    app.tapped = null;
    app.toggleLetterOff = function(index) {
      app.tapped = index;
      console.log(app.tapped);
      setTimeout(function() {
        app.tapped = null;
        app.assignScore();
        letterList.currentAlphabet.splice(index, 1);
      }, 600);
      console.log("You tapped toggleletteroff");
    };
  }
  return {};
});


$traceurRuntime.ModuleStore.getAnonymousModule(function() {
  "use strict";
  angular.module('app').controller('GameCtrl', GameCtrl);
  function GameCtrl(letterList, appFactory) {
    var game = this;
    game.letterSet = letterList.currentAlphabet;
    game.toggleLetterOff = letterList.toggleLetterOff;
    game.scroll = function() {
      var newCurrentAlphabet = letterList.scroll();
      game.letterSet = newCurrentAlphabet;
    };
  }
  return {};
});


$traceurRuntime.ModuleStore.getAnonymousModule(function() {
  "use strict";
  angular.module('app').controller('scoreCtrl', scoreCtrl);
  function scoreCtrl($state) {
    console.log('We are in the score controller.');
    var score = this;
    score.players = [{
      label: "playerone",
      name: "Player One",
      iconurl: "/img/ic-playerone.png",
      score: 0
    }, {
      label: "playertwo",
      name: "Player Two",
      iconurl: "/img/ic-playertwo.png",
      score: 0
    }, {
      label: "playerthree",
      name: "Player Three",
      iconurl: "/img/ic-playerthree.png",
      score: 0
    }, {
      label: "playerfour",
      name: "Player Four",
      iconurl: "/img/ic-playerfour.png",
      score: 0
    }];
    score.addScore = function(playerLabel) {
      for (var players = score.players,
          i = 0; i < players.length; i++) {
        if (players[i].label === playerLabel) {
          players[i].score++;
          console.log(playerLabel + " Loop " + i + ", players dot length is " + players.length + " " + players[i].label + "\'s score is " + players[i].score);
        }
        $state.go("game");
      }
    };
  }
  return {};
});


$traceurRuntime.ModuleStore.getAnonymousModule(function() {
  "use strict";
  angular.module('app').directive('appVersion', function appVersion() {
    return {
      restrict: 'E',
      template: '<span>{{ "%VERSION%" | interpolate  }}</span>',
      link: link
    };
    function link($scope, $element, $attrs) {}
  });
  return {};
});


$traceurRuntime.ModuleStore.getAnonymousModule(function() {
  "use strict";
  angular.module('app').filter('interpolate', function interpolate($version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, $version);
    };
  });
  return {};
});


$traceurRuntime.ModuleStore.getAnonymousModule(function() {
  "use strict";
  (function() {
    angular.module('app').factory('appFactory', appFactory);
    function appFactory() {
      var appfactory = {};
      appfactory.currentValue = NaN;
      appfactory.modalWindow = function() {
        var modalWindow = {};
        console.log('2 - Entering appfactory dot modalWindow');
        var currentValue = appfactory.modalToggleValue(true);
        console.log("3 - Modal value is currently set at " + currentValue);
        appfactory.modalMessage = appfactory.messages.pause;
        console.log("4 - The value of the message is " + appfactory.modalMessage);
        return currentValue;
      };
      return appfactory;
    }
  })();
  return {};
});


$traceurRuntime.ModuleStore.getAnonymousModule(function() {
  "use strict";
  (function() {
    angular.module('app').factory('letterList', letterList);
    function letterList() {
      var letters = {};
      letters.alphabetInit = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      letters.currentAlphabet = letters.alphabetInit;
      letters.scroll = function() {
        var scrollSplice = letters.currentAlphabet.splice(0, 8);
        var newCurrentAlphabet = letters.currentAlphabet.concat(scrollSplice);
        letters.currentAlphabet = newCurrentAlphabet;
        return letters.currentAlphabet;
      };
      return letters;
    }
  })();
  return {};
});



//# sourceMappingURL=app.js.map