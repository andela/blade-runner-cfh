angular.module('mean.system')
  .controller('DashboardController', ['$scope', '$window', 'routeActions', ($scope, $window, routeActions) => {
    $scope.routeActions = routeActions;
    $scope.games = [];

    $scope.getGames = () => {
      const token = $window.localStorage.getItem('token');
      if (token) {
        routeActions.getGames('/api/games/history', token)
          .then((response) => {
            console.log(response.data);
            $scope.games = response.data.result;
          }, (error) => {
            console.log(error);
          });
      }
    };
  }]);
