app.controller('ForecastController', ['$scope', 'forecast', function($scope, forecast){
    forecast.then(function(response){
        $scope.fiveDay = response.data;
        }
    )
}
]);