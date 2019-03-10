app.factory('photos', ['$http', function($http) {
    return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json')
        .then(function(response) {
            return response.data;
        })
}]);
