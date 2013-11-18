(function() {
  angular.module('pickr', [])
    .directive('pickr', ['$parse', function($parse) {
      return {
        restrict: 'EA',
        require: 'ngModel',
        scope: {
          selectedDate: '=ngModel',
          options: '&pickr'
        },
        link: function(scope, el, args) {
          var options = scope.options();

          el.pickr(options);

          if (args.ngModel) {
            scope.$watch('selectedDate', function(val) {
              el.val(val);
            }, true);
          }
        }
      };
    }]);
}());