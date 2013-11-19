(function() {
  angular.module('pickr', [])
    .directive('pickr', ['$parse', function($parse) {
      return {
        restrict: 'EA',
        require: 'ngModel',
        scope: {
          model: '=ngModel',
          options: '&pickr'
        },
        link: function(scope, el, args) {
          var options = scope.options();

          el.pickr(options);

          el.on('input', function() {
            scope.$apply(function() {
              scope.model = el.val();
            });
          });

          scope.$watch('model', function(newVal, oldVal) {
            if(newVal !== undefined) {
              el.val(newVal);
            }
          });
        }
      };
    }]);
}());
