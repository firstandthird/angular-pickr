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

          if (args.ngModel) {
            scope.$watch(args.ngModel, function(newVal, oldVal) {
              if(newVal !== oldVal) {
                scope.model = newVal;
                el.val(newVal);
              }
            }, true);
          }
        }
      };
    }]);
}());