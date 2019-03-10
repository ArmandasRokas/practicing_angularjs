/*
Created a new module named myApp.
A module contains the different components of an AngularJS app.
 */

var app = angular.module("myApp", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'HomeController',
            templateUrl: 'views/home.html'
        }).when('/photos/:id',{
        controller : 'PhotoController',
        templateUrl: 'views/photo.html'
    });
});


/*
Why are routes useful? Instead of filling a single view with more code than needed,
routes let us map URLs to self-contained controllers and templates.
Furthermore, now that the app has URLs, users can easily bookmark and share the app's pages.
 */