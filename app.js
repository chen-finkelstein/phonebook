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
        // other
        .otherwise({ redirectTo: '/' });
}]);