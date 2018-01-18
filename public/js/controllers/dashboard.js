angular.module('mean.system')
  .controller('DashboardController', ['$scope', '$window', '$location', 'routeActions',
    ($scope, $window, $location, routeActions) => {
      $scope.routeActions = routeActions;
      $scope.games = [];
      $scope.leaderboard = [];
      $scope.donations = [];

      $scope.getGames = () => {
        const token = $window.localStorage.getItem('token');
        if (token) {
          routeActions.getGames('/api/games/history', token)
            .then((response) => {
              $scope.games = response.data.result;
            }, (error) => {
              $scope.error = error;
            });
        }
      };

      $scope.getLeaderboard = () => {
        const token = $window.localStorage.getItem('token');
        if (token) {
          routeActions.getLeaderboard('/api/leaderboard', token)
            .then((response) => {
              $scope.leaderboard = response.data.result;
            }, (error) => {
              $scope.error = error;
            });
        }
      };

      $scope.getDonations = () => {
        const token = $window.localStorage.getItem('token');
        if (token) {
          routeActions.getDonations('/api/donations', token)
            .then((response) => {
              $scope.donations = response.data.donations;
            }, (error) => {
              $scope.error = error;
            });
        }
      };

      $scope.getData = () => {
        $scope.getGames();
        $scope.getLeaderboard();
        $scope.getDonations();
      };

      $scope.signOut = () => {
        $window.localStorage.removeItem('token');
        $location.path('/');
      };
    }]);
