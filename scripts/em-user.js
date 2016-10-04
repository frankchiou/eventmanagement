var user = angular.module("emUser", []);

user.controller("emUserCtrl", function($http, $location, $scope) {	
	var removeErrorMsg = function (field) {
		$scope[field].error = null;
	};
	var setErrorMsg = function (field, msg) {
		$scope[field].error = msg;
	};

	$scope.data = {
		userName: "",
		password: "",
		confirmPassword: "",
		newPassword: "",
		
		firstName: "",
		lastName: "",
		phoneNumber: "",
		
		badgeNumber: null,
		
		cossy: null,
		dci: null,
		pop: null,
	};
	
	$scope.error = {
		firstName: null,
		lastName: null,
		phoneNumber: null,
	};
	
	$scope.path = $location.path();
	
	$scope.createUser = function() {
		alert("Create a user!");
	};
	
	$scope.loadUser = function() {
		$scope.data = {
			userName: "kumotest1",
			firstName: "Taro",
			lastName: "Yamada",
			phoneNumber: 5035555555,
			
			dci: 1234567890
		}
	}
	
	$scope.updateUser = function() {
		alert("Update a user!");
	};
	
	if ($location.path() === "/user") {
		$scope.loadUser();
	}
});