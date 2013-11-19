
/*!
 * angular-pickr - Angular directive for pickr
 * v0.1.1
 * https://github.com/firstandthird/angular-pickr
 * copyright First + Third 2013
 * MIT License
*/
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
