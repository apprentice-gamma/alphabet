// Declare app level module which depends on filters, and services
angular.module('app', ['ngSanitize', 'ngResource', 'ui.router', 'oc.modal'])
	.constant('VERSION', '0.7.0')
	.config(function appConfig($stateProvider, $locationProvider, $urlRouterProvider) {
		$locationProvider.hashPrefix('!');
		$urlRouterProvider.otherwise("/todo");

		$stateProvider.state('game', {
			url: "/",
			views: {
				"mainView": {
					templateUrl: "partials/game.html"
				}
			}
		}).state('todo', {
			url: "/todo", // root route
			views: {
				"mainView": {
					templateUrl: "partials/todo.html"
				}
			}
		});

		// /!\ Without server side support html5 must be disabled.
		return $locationProvider.html5Mode(true);
	});
