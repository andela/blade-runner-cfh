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
          ownerUsername: game.players[0].username,
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
          ownerUsername: game.players[0].username,
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
          'x-access-token': token,
          'Cache-Control': 'no-cache'
        }
      }),
      getLeaderboard: (route, token) => $http({
        method: 'GET',
        url: route,
        headers: {
          'x-access-token': token,
          'Cache-Control': 'no-cache'
        }
      }),
      getDonations: (route, token) => $http({
        method: 'GET',
        url: route,
        headers: {
          'x-access-token': token,
          'Cache-Control': 'no-cache'
        }
      })
    };
  }]);
