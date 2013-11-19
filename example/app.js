angular.module('example-app', ['pickr']);

var MainController = function($scope, $timeout) {
  $scope.testModel = 'Pick Me';
  $scope.$watch('testModel', function(newVal) {
    console.log('changed', newVal);
  });



};
