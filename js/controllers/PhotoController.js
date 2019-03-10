app.controller('PhotoController', ['$scope', 'photos', '$routeParams', function($scope, photos, $routeParams) {
    photos.then(function(data) {
        $scope.detail = data[$routeParams.id]; // services used to one element
    });
}]);