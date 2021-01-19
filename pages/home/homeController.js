angular.module('PhonebookApp')
    .controller('homeController',['$scope', '$http', function ($scope, $http) {

        //get users
        $http({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/users'
        }).then(function successCallback(response) {
            $scope.records = response.data;
        }, function errorCallback(response) {
            alert("An error occured.");
        });


    }]);