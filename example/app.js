angular.module('example-app', ['pickr']);

var MainController = function($scope, $timeout) {
  $scope.testModel = 'Pick Me';
  $scope.$watch('testModel', function(newVal) {
    console.log('model changed', newVal);
  });

  $scope.$watch('inlineModel', function(newVal) {
    console.log('inline model changed', newVal);
  }, true);


};
