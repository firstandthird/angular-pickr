
/*!
 * angular-pickr - Angular directive for pickr
 * v0.1.0
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