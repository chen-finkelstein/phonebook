let app = angular.module('PhonebookApp', ["ngRoute"]);

// config routes
app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider)  {

    $locationProvider.hashPrefix('');

    $routeProvider
        // homepage
        .when('/', {
            templateUrl: 'pages/home/home.html',
            controller : 'homeController as homeCtrl'
        })
        .when('/user/:id', {
            templateUrl: 'pages/user/user.html',
            controller : 'userController as userCtrl'
        })
        .when('/user', {
            templateUrl: 'pages/user/user.html',
            controller : 'userController as userCtrl'
        })
        // other
        .otherwise({ redirectTo: '/' });
}]);