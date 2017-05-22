angular.module('LibraryApp')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'templates/main.html'
		}).when('/login', {
			templateUrl: 'templates/login.html'
		}).when('/book/:id', {
			templateUrl: 'templates/showbook.html',
			controller: 'ShowBookController'
		})
	}]);
