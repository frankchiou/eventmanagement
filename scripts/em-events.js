var eventList = angular.module("emEvents", []);

eventList.filter("enrollment", function(){
	return function(input) {
		switch(input) {
			case true:
				return "Registered";
			default:
				return "Not Registered";
		}
	};
});

eventList.filter("eventDayFilter", function() {
	return function(items, condition) {	
		if (condition) {
			var filtered = [];
			
			for (var i = 0; i < items.length; i++) {			
				if (items[i].time.getDay() === condition.id) {
					filtered.push(items[i]);
				}
			}
			return filtered;
		}
		return items;
	}
});

eventList.controller("emEventsCtrl", function($scope, $http, $route) {
	$scope.events = null;
	$scope.games = null;
	$scope.days = null;
	
	$scope.game = null;
	
	$scope.selected = {
		game: null,
		day: null,
		enrolled: "",
	};
	
	/*** TEST DATA ***/
	$scope.events = [
		{
			id: 1,
			game: "Magic: The Gathering",
			format: "Magic Origins Draft",
			time: new Date("2015-09-06 01:00Z"),
			price: "10.00",
			description: "Hi mom!",
			enrolled: true,
		},
		{
			id: 2,
			game: "Yu-Gi-Oh!",
			format: "Battle Pack",
			time: new Date("2015-09-05 21:00Z"),
			price: "10.00",
			description: "Hello World.",
			enrolled: false,
		},
		{
			id: 3,
			game: "Magic: The Gathering",
			format: "Dragons of Tarkir Draft",
			time: new Date("2015-09-05 01:00Z"),
			price: "10.00",
			description: "Hello World.",
			enrolled: false,
		},
	];

	$scope.games = [
		{id: 1, name: "Magic: The Gathering"},
		{id: 2, name: "Yu-Gi-Oh!"},
	];
	
	$scope.days = [
		{id: 5, name: "Friday"},
		{id: 6, name: "Saturday"},
		{id: 0, name: "Sunday"},
		{id: 1, name: "Monday"}
	];
	
	/*** END TEST DATA ***/
	
	$scope.setEnrollStatus = function (id, enrolled) {
		var url = "";
		var data = {
			id: id,
			enrolled: !enrolled,
		}
		
		// $http.post(url, data)
			// .succuss(function(data){
				// $route.reload();
			// });
			
		for (var i = 0; i < $scope.events.length; i++) {
			if ($scope.events[i].id === id) {
				$scope.events[i].enrolled = !enrolled;
				break;
			}
		}
	};
	
	$scope.showEvent = function(id) {
		alert("The ID for this event is " + id + ".");
	}
});