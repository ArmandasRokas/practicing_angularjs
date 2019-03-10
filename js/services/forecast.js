/**
 * Services are a way to make standalone communication logic,
 * like forecast which fetches weather data from a server
 *
 *
 * Why are services useful?
 * Instead of filling the controller with code to fetch weather data from a server,
 * it's better to move this independent logic into a service so
 * that it can be reused by other parts of the app.
 */


app.factory('forecast', ['$http', function($http) {
    return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json')
        .then(function(response) {
            return response;
        })
}]);