var eventManagement = angular.module("eventManagement", ["ngMessages", "ngRoute", "emEvent", "emEvents", "emGames", "emSignIn", "emUser"]);

eventManagement.config(function ($routeProvider) {
	$routeProvider
		// .when('/', {
			// templateUrl: '../view/main.html',
			// controller: ''
		// })
		.when('/signin', {
			templateUrl: 'views/signin.html',
			controller: 'emSignInCtrl',
		})
		.when('/signup', {
			templateUrl: 'views/signup.html',
			controller: 'emUserCtrl',
		})
		.when('/events', {
			templateUrl: 'views/events.html',
			controller: 'emEventsCtrl'
		})
		.when('/event', {
			templateUrl: 'views/event.html',
			controller: 'emEventCtrl'
		})
		.when('/games', {
			templateUrl: 'views/games.html',
			controller: 'emGamesCtrl'
		})
		.when('/user', {
			templateUrl: 'views/user.html',
			controller: 'emUserCtrl'
		})
		.otherwise({
			redirectTo: '/signin',
		});
})

eventManagement.controller("emMainCtrl", function($scope) {
	$scope.convention = "Kumoricon";
	$scope.department = "Tabletop";
	
	/*** TEST DATA ***/
	$scope.loggedin = {
		username: "kumotest1",
		firstname: "Taro",
		lastname: "Yamada"
	}
})

