require('angular');

var app = angular.module('bgroups', []);

app.controller('MainCtrl', ['$scope',
  function($scope) {
    console.log('in scope');
    $scope.message = "browsered";
}]);