'use strict';
angular.module('bucleApp.core')

.directive('fullSize', [function() {
    return {
      restrict: 'A',
      link: function($scope, iElm, iAttrs, controller) {
        var height = window.innerHeight;
        iElm.css('height', height + 'px');
      }
    };
  }
]);
