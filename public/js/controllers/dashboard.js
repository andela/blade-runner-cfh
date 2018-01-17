angular.module('mean.system')
  .controller('DashboardController', ['$scope', '$window', 'routeActions', ($scope, $window, routeActions) => {
    $scope.routeActions = routeActions;
    $scope.games = [];
    $scope.leaderboard = [];

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

    $scope.getData = () => {
      $scope.getGames();
      $scope.getLeaderboard();
    };
  }]);
