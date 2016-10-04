var games = angular.module("emGames", []);

games.filter("checkedIn", function() {
	return function(input) {
		switch(input) {
			case true:
				return "Checked In";
			default:
				return "Checked Out";
		}
	}
});

games.controller("emGamesCtrl", function($scope) {
	$scope.games = null;
	
	/*** TEST DATA ***/
	$scope.games = [
		{
			id: 1,
			name: "Tanto Cuore",
			status: false,
			checkedout: new Date(),
		},
		{
			id: 2,
			name: "Kanzume Goddess",
			status: true,
			checkedout: null,
		},
		{
			id: 3,
			name: "Boss Monster",
			status: false,
			checkedout: new Date("2015-05-16 13:14 PST"),
		},
		{
			id: 4,
			name: "Tanto Cuore",
			status: true,
			checkedout: null,
		},
	];
	/*** END TEST DATA ***/
});