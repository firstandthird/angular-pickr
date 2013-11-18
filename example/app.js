angular.module('example-app', ['pickr']);

var MainController = function($scope) {
  $scope.$watch('selectedDate', function(val) {
    console.log('changed date', val);
  }, true);
};
