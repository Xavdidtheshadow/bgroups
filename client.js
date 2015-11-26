// handles the splitting and the showing

require('angular');

var app = angular.module('bgroups', []);

app.controller('MainCtrl', ['$scope',
  function($scope) {
    'use strict';

    $scope.makeGroup = function(){
      var allNames = shuffle($scope.model.names.split('\n'));
      $scope.model.groups = split(allNames, $scope.model.numGroups);

      console.log($scope.model.groups);
    };

    $scope.reset = function(){
      $scope.model = {
        names: null,
        numGroups: 3,
        groups: []
      };
    };

    // http://stackoverflow.com/a/12646864/1825390
    function shuffle(array) {
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
      return array;
    }

    // http://stackoverflow.com/a/8189268/1825390
    function split(a, n) {
      var len = a.length,out = [], i = 0;
      while (i < len) {
        var size = Math.ceil((len - i) / n--);
        out.push(a.slice(i, i += size));
      }
      return out;
    }

    // MAIN
    $scope.reset();
}]);
