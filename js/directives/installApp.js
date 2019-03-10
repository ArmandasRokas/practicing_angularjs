/**
 * Directives are a way to make standalone UI components, like <app-info>
 *
 * Directives are a powerful way to create self-contained, interactive components.
 * Unlike jQuery which adds interactivity as a layer on top of HTML,
 * AngularJS treats interactivity as a native component of HTML.
 */


app.directive('installApp', function() {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/directives/installApp.html',

        link: function(scope, element, attrs) {
            scope.buttonText = "Install",
                scope.installed = false,

                scope.download = function() {
                    element.toggleClass('btn-active')
                    if(scope.installed) {
                        scope.buttonText = "Install";
                        scope.installed = false;
                    } else {
                        scope.buttonText = "Uninstall";
                        scope.installed = true;
                    }
                }
        }
    };
});