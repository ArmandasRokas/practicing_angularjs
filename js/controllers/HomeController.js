app.controller('HomeController', ['$scope', 'photos', function($scope, photos) {
    photos.then(function(data) {
        $scope.photos = data; // service is used to get all photos array
    });
}]);