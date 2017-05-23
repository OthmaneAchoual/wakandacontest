angular.module('LibraryApp').controller('ShowBookController', ['$scope', '$routeParams', 'Book', function($scope, $routeParams, Book) {
    //$scope.id = $routeParams.id;
    Book.find($routeParams.id).then(function(response) {
        $scope.book = response.data;
    });
}]);