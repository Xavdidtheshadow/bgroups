
var app = angular.module('bgroups', []);

app.controller('MainCtrl', ['$scope',
  function($scope) {
    $scope.greeting = { text: 'Hello' };
}]);