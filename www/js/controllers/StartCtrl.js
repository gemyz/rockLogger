angular.module('starter.controllers')

  .controller('StartCtrl', function($scope,$state) {
    $scope.loginWithEmail = function (){
      $state.go("app.search")
    };
    $scope.loginWithFacebook = function (){
      $state.go("app.outcropDescriptionForm")
    };

  });
