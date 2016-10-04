var event = angular.module("emEvent", []);

event.controller("emEventCtrl", function($scope) {
	$scope.event = {
		format: null,
		game: null,
		time: null,
		price: null,
		prizes: null,
		description: null
	}
});