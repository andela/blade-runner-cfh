angular.module('mean.system')
  .controller('IndexController', ['$scope', '$window', 'Global', '$http', '$location', 'socket', 'game', 'AvatarService',
    ($scope, $window, Global, $http, $location, socket, game, AvatarService) => {
      $scope.global = Global;
      $scope.data = {};
      $scope.serverErrors = {};
      $scope.showOptions = true;

      NotificationService.getNotifications();

      $rootScope.$watch('notifications', () => {
        $rootScope.notifications;
      });

      $scope.readNotifications = () => {
        $http.put('/api/users/notifications/read', {}, {
          headers: {
            token: localStorage.getItem('token')
          }
        })
          .then(() => {
            $rootScope.notifications = [];
          });
      };
      $scope.playGameAsGuest = () => {
        $scope.gameMode = 'guest';
        $('#selectRegion').modal();
      };

      $scope.selectedRegion = '1';

      $scope.startGameForRegion = () => {
        localStorage.setItem('selectedRegion', $scope.selectedRegion);
        window.location.href = `/play${$scope.gameMode === 'friends' ? '?custom' : ''}`;
      };

      $scope.playWithFriends = () => {
        $scope.gameMode = 'friends';
        $('#selectRegion').modal();
      };

      $scope.showOptions = () => {
        if (window.localStorage.token) {
          $scope.showOptions = false;
        } else {
          $scope.showOptions = true;
        }
      };
      $scope.showOptions();

      $scope.playAsGuest = () => {
        game.joinGame();
        $location.path('/app');
      };

      $scope.showError = () => {
        if ($location.search().error) {
          return $location.search().error;
        }

        return false;
      };

      $scope.hasError = field => $scope.serverErrors[field] !== undefined;

      $scope.signUp = () => {
        const successCallback = (res) => {
          const { token } = res.data;
          if (token) {
            $window.localStorage.setItem('token', token);
          }
          window.location.href = '/';
        };
        $scope.serverErrors = {};
        const errorCallBack = (error) => {
          const errorsFromServer = error.data.errors;
          errorsFromServer.forEach((errorObject) => {
            $scope.serverErrors[errorObject.field] = errorObject.message;
          });
        };
        $http.post('/api/users', $scope.data)
          .then(successCallback, errorCallBack);
      };

      $scope.errorExist = () => $scope.serverErrors.message !== undefined;

      $scope.signOut = () => {
        window.localStorage.removeItem('token');
        $location.path('/');
        window.location.reload(true);
      };

      $scope.signIn = () => {
        const successCallback = (res) => {
          const { token } = res.data;
          if (token) {
            $window.localStorage.setItem('token', token);
          }
          window.location.href = '/';
        };

        const errorCallBack = (err) => {
          $scope.serverErrors = {};
          const errorsFromServer = err.data.message;
          $scope.serverErrors.message = errorsFromServer;
        };
        $http.post('/api/users/signin', $scope.data)
          .then(successCallback, errorCallBack);
      };

      $scope.avatars = [];
      AvatarService.getAvatars()
        .then((data) => {
          $scope.avatars = data;
        });
    }]);
