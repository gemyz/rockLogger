angular.module('starter.directives')

  .directive('goeyButton', function() {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'js/directives/goeyButton.html'
    };
  });
