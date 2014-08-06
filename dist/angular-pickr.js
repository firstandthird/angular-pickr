
/*!
 * angular-pickr - Angular directive for pickr
 * v0.3.0
 * https://github.com/firstandthird/angular-pickr
 * copyright First+Third 2014
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

          el.on('pickr:selected', function(e, dates) {
            scope.$apply(function() {
              scope.model = dates;
            });
          });
        }
      };
    }]);
}());
