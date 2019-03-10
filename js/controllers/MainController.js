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
    $scope.runs = [
        {
            id: 2,
            location: "Paris",
            startTime: new Date('2019', '03', '08','11', '13'),
            likes: 0
        },
        {
            id: 3,
            location: "London",
            startTime: new Date('2019', '04', '09','19', '13'),
            likes: 0
        }
    ];
    $scope.plusOne = function(index){

        for(i = 0;  i<$scope.runs.length; i++){
            if($scope.runs[i].id == index){
                $scope.runs[i].likes++;
            }
        }

      //  $scope.runs[index].likes += 1;
    }

}]);

app.controller('ScopeController', function($scope){
    $scope.name = "Johnny";
    console.log($scope); //just trying log the injected $scope
})

// passing the scope object and
// I create a variable in scope object
// name and give a variable to "Johnny"
// scope is just the object and there exist only one scope in application?

app.controller('AppStoreController', ['$scope', function($scope) {
    $scope.move = {
        icon: 'img/move.jpg',
        title: 'MOVE',
        developer: 'MOVE, Inc.',
        price: 0.99
    };

    $scope.shutterbugg = {
        icon: 'img/shutterbugg.jpg',
        title: 'Shutterbugg',
        developer: 'Chico Dusty',
        price: 2.99
    };

    $scope.gameboard = {
        icon: 'img/gameboard.jpg',
        title: 'Gameboard',
        developer: 'Armando P.',
        price: 1.99
    };
}]);