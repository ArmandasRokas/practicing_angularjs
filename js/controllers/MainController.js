//  A controller manages the app's data

app.controller('MainController', ['$scope', function($scope) {
    $scope.title = 'Top Sellers in Books';
}]);


app.controller('RunController', ['$scope', function($scope){
    $scope.run = {
        id : 1,
        location: "Copenhagen",
        startTime: new Date('2019', '03', '07','14', '13')
    }
}]);