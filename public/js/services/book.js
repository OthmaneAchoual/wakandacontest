angular.module('LibraryApp').factory('Book', ['$http', function($http) {
    return {
        all: function() {
            return $http({method: 'GET', url: "/books"});
        },
        find: function(id) {
            return $http({method: 'GET', url: "/books/" + id });
        }
    }
}]);