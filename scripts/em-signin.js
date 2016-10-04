var signIn = angular.module("emSignIn", []);

signIn.controller("emSignInCtrl", function($scope, $location) {
	$scope.data = {
		userName: "",
		password: "",
	};
	
	$scope.submit = function() {
		alert("Hello World");
	}
});