angular.module('example-app', ['pickr']);

var MainController = function($scope) {
  $scope.$watch('testModel', function(newVal) {
    console.log('changed', newVal);
  });
};
