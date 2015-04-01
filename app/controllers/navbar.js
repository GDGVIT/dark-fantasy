dark.controller('NavController', ['$scope', function ($scope) {
	$scope.nav = [
		{'name': 'About Us', 'action': '1'},
		{'name': 'What We Do', 'action': '2'},
		{'name': 'Our Works', 'action': '3'},
		{'name': 'Gallery', 'action': '4'},
		{'name': 'News', 'action': '5'},
		{'name': 'Team', 'action': '6'},
		{'name': 'Contact Us', 'action': '7'}
	];
	console.log($scope.nav);
}])
