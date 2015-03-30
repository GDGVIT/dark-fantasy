dark.controller('NavController', ['$scope', function ($scope) {
	$scope.nav = [
		{'name': 'About Us', 'action': '1'},
		{'name': 'What We Do', 'action': '2'},
		{'name': 'Our Works', 'action': '3'},
		{'name': 'Team', 'action': '4'},
		{'name': 'Contact Us', 'action': '5'}
	];
	console.log($scope.nav);
}])