dark.controller('NavController', ['$scope', function ($scope) {
	$scope.nav = [
		{'name': 'About Us'},
		{'name': 'What We Do'},
		{'name': 'Our Works'},
		{'name': 'Team'},
		{'name': 'Contact Us'}
	];
	console.log($scope.nav);
}])