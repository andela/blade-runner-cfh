angular.module('mean.system')
  .factory('routeActions', ['$http', function ($http) {
    return {
      saveGame: (route, game, token) => $http({
        method: 'POST',
        url: route,
        headers: {
          'x-access-token': token
        },
        data: {
          owner: game.players[0].id,
          players: game.players,
          winner: '',
          completed: false
        }
      }),
      updateGame: (route, game, token) => $http({
        method: 'PUT',
        url: route,
        headers: {
          'x-access-token': token
        },
        data: {
          owner: game.players[0].id,
          players: game.players,
          winner: game.gameWinner,
          completed: true
        }
      })
    };
  }]);
