'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', '$window', 'Global', '$http', '$location', 'socket', 'game', 'AvatarService', function ($scope, $window, Global, $http, $location, socket, game, AvatarService) {
  $scope.global = Global;
  $scope.data = {};
  $scope.serverErrors = {};

  $scope.playAsGuest = function () {
    game.joinGame();
    $location.path('/app');
  };

  $scope.showError = function () {
    if ($location.search().error) {
      return $location.search().error;
    }

    return false;
  };

  $scope.hasError = function (field) {
    return $scope.serverErrors[field] !== undefined;
  };

  $scope.signUp = function () {
    var successCallback = function successCallback(res) {
      var token = res.data.token;

      if (token) {
        $window.localStorage.setItem('token', token);
      }
      $location.path('/');
    };
    $scope.serverErrors = {};
    var errorCallBack = function errorCallBack(error) {
      var errorsFromServer = error.data.errors;
      errorsFromServer.forEach(function (errorObject) {
        $scope.serverErrors[errorObject.field] = errorObject.message;
      });
    };
    $http.post('/api/users', $scope.data).then(successCallback, errorCallBack);
  };

  $scope.avatars = [];
  AvatarService.getAvatars().then(function (data) {
    $scope.avatars = data;
  });
}]);