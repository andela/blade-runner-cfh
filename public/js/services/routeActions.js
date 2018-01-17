/* eslint func-names: ["error", "never"] */

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
          players: game.players,
          winner: '',
          rounds: game.round,
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
          players: game.players,
          winner: game.players[game.gameWinner],
          rounds: game.round,
          completed: true
        }
      }),
      getGames: (route, token) => $http({
        method: 'GET',
        url: route,
        headers: {
          'x-access-token': token
        }
      })
    };
  }]);
