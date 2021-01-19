angular.module('PhonebookApp')
    .controller('userController',['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

        // $scope.id = $rootScope.id;
        
        //get user
        $http({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/users/' + $routeParams.id
        }).then(function successCallback(response) {
            $scope.user = response.data;
        }, function errorCallback(response) {
            alert("An error occured.");
        });

    }]);