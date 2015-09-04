(function () {
  'use strict';
    /**
     * USE(html): <input ng-focus-if="field == 'abc'"/>
     */
    angular
    .module('wolf.mydirective', [])
    .directive('ngFocusIf', ["$timeout", function($timeout) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                if(scope.$eval(attrs['ngFocusIf'])) {
                    $timeout(function () {
                        element.focus();
                    }, 0);
                }
            }
        };
    }]);
})();
