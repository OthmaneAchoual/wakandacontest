angular.module('LibraryApp')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'templates/main.html'
		});
	}]);
