/**
 * Experimenting with creating a directive
 */

app.directive('appInfo', function(){
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl:
            'js/directives/appInfo.html'
    };
});