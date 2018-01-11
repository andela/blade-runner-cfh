'use strict';

angular.module('mean.system').factory('socket', ['$rootScope', function ($rootScope) {
  var socket = io.connect();
  return {
    on: function on(eventName, callback) {
      socket.on(eventName, function () {
        var args = arguments;
        $rootScope.safeApply(function () {
          callback.apply(socket, args);
        });
      });
    },
    emit: function emit(eventName, data, callback) {
      socket.emit(eventName, data, function () {
        var args = arguments;
      });
      $rootScope.safeApply(function () {
        if (callback) {
          callback.apply(socket, args);
        }
      });
    },
    removeAllListeners: function removeAllListeners(eventName, callback) {
      socket.removeAllListeners(eventName, function () {
        var args = arguments;
        $rootScope.safeApply(function () {
          if (callback) {
            callback.apply(socket, args);
          }
        });
      });
    }
  };
}]);