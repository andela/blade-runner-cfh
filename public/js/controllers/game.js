angular.module('mean.system')
  .controller('GameController', [
    '$rootScope',
    '$scope',
    'game',
    'routeActions',
    '$timeout',
    '$location',
    '$window',
    'MakeAWishFactsService',
    (
      $rootScope, $scope, game, routeActions, $timeout,
      $location, $window, MakeAWishFactsService
    ) => {
      $scope.hasPickedCards = false;
      $scope.winningCardPicked = false;
      $scope.showTable = false;
      $scope.modalShown = false;
      $scope.game = game;
      $scope.routeActions = routeActions;
      $scope.pickedCards = [];
      let makeAWishFacts = MakeAWishFactsService.getMakeAWishFacts();
      $scope.makeAWishFact = makeAWishFacts.pop();

      // Listen to the maxPlayersReached event on the root scope, and if listened ,
      // then trigger a bootstrap modal to tell the user that the game started already !!!.
      $rootScope.$on('maxPlayersReached', () => {
        $('#maxPlayersReached').modal();
      });

      $scope.percentageOfPlayersFound = () =>
        `${Math.floor(($scope.game.players.length / $scope.game.playerMaxLimit) * 100)}%`;

      $scope.pickCard = (card) => {
        if (!$scope.hasPickedCards) {
          if ($scope.pickedCards.indexOf(card.id) < 0) {
            $scope.pickedCards.push(card.id);
            if (game.curQuestion.numAnswers === 1) {
              $scope.sendPickedCards();
              $scope.hasPickedCards = true;
            } else if (game.curQuestion.numAnswers === 2 &&
              $scope.pickedCards.length === 2) {
              $scope.hasPickedCards = true;
              $timeout($scope.sendPickedCards, 300);
            }
          } else {
            $scope.pickedCards.pop();
          }
        }
      };

      $scope.pointerCursorStyle = () => {
        if ($scope.isCzar() && $scope.game.state === 'waiting for czar to decide') {
          $('#background-image').css('height', '100vh');
          return { cursor: 'pointer' };
        }
        return {};
      };

      $scope.sendPickedCards = () => {
        game.pickCards($scope.pickedCards);
        $scope.showTable = true;
      };

      $scope.cardIsFirstSelected = (card) => {
        if (game.curQuestion.numAnswers > 1) {
          return card === $scope.pickedCards[0];
        }
        return false;
      };

      $scope.cardIsSecondSelected = (card) => {
        if (game.curQuestion.numAnswers > 1) {
          return card === $scope.pickedCards[1];
        }
        return false;
      };

      $scope.firstAnswer = ($index) => {
        if ($index % 2 === 0 && game.curQuestion.numAnswers > 1) {
          return true;
        }

        return false;
      };

      $scope.secondAnswer = ($index) => {
        if ($index % 2 === 1 && game.curQuestion.numAnswers > 1) {
          return true;
        }
        return false;
      };

      $scope.showFirst = card =>
        game.curQuestion.numAnswers > 1 && $scope.pickedCards[0] === card.id;

      $scope.showSecond = card =>
        game.curQuestion.numAnswers > 1 && $scope.pickedCards[1] === card.id;

      $scope.isCzar = () => game.czar === game.playerIndex;

      $scope.isPlayer = $index => $index === game.playerIndex;

      $scope.isCustomGame = () => !(/^\d+$/).test(game.gameID) && game.state === 'awaiting players';

      $scope.isPremium = $index => game.players[$index].premium;

      $scope.currentCzar = $index => $index === game.czar;

      $scope.winningColor = ($index) => {
        if (game.winningCardPlayer !== -1 && $index === game.winningCard) {
          return $scope.colors[game.players[game.winningCardPlayer].color];
        }
        return '#f9f9f9';
      };

      $scope.pickWinning = (winningSet) => {
        if ($scope.isCzar()) {
          game.pickWinning(winningSet.card[0]);
          $scope.winningCardPicked = true;
        }
      };

      $scope.winnerPicked = () => game.winningCard !== -1;

      $scope.startGame = () => {
        if (game.players.length < game.playerMinLimit) {
          // open modal and tell user to invite players.
          $('#inviteNewPlayers').modal();
          return;
        }
        if (game.players.length >= game.playerMinLimit) {
          $('#confirmStartGame').modal();
        }
      };

      // start game and save it
      $scope.confirmStartGame = () => {
        game.startGame();
        if (!(/^\d+$/).test(game.gameID)) {
          const token = $window.localStorage.getItem('token');
          if (token) {
            routeActions.saveGame(`/api/games/${game.gameID}/start`, game, token)
              .then(() => {
                $scope.message = 'Game saved successfully';
              }, () => {
                $scope.message = 'Game not saved';
              });
          }
        }
      };

      $scope.abandonGame = () => {
        game.leaveGame();
        $location.path('/');
      };

      // Catches changes to round to update when no players pick card
      // (because game.state remains the same)
      $scope.$watch('game.round', () => {
        $scope.hasPickedCards = false;
        $scope.showTable = false;
        $scope.winningCardPicked = false;
        $scope.makeAWishFact = makeAWishFacts.pop();
        if (!makeAWishFacts.length) {
          makeAWishFacts = MakeAWishFactsService.getMakeAWishFacts();
        }
        $scope.pickedCards = [];
      });

      // In case player doesn't pick a card in time, show the table
      $scope.$watch('game.state', () => {
        // if game has ended, update game data
        if (game.state === 'game ended' && !(/^\d+$/).test(game.gameID)) {
          const token = $window.localStorage.getItem('token');
          if (token) {
            routeActions.updateGame(`/api/games/${game.gameID}/start`, game, token)
              .then(() => {
                $scope.message = 'Game updated successfully';
              }, () => {
                $scope.message = 'Game not updated';
              });
          }
        }
        if (game.state === 'waiting for czar to decide' && $scope.showTable === false) {
          $('#background-image').css('height', '100vh');
          $scope.showTable = true;
        }
      });

      $scope.$watch('game.gameID', () => {
        if (game.gameID && game.state === 'awaiting players') {
          if (!$scope.isCustomGame() && $location.search().game) {
            // If the player didn't successfully enter the request room,
            // reset the URL so they don't think they're in the requested room.
            $location.search({});
          } else if ($scope.isCustomGame() && !$location.search().game) {
            // Once the game ID is set, update the URL if this is a game with friends,
            // where the link is meant to be shared.
            $location.search({ game: game.gameID });
            if (!$scope.modalShown) {
              setTimeout(() => {
                const link = document.URL;
                const txt = 'Give the following link to your friends so they can join your game: ';
                $('#lobby-how-to-play').text(txt);
                $('#oh-el').css({
                  'text-align': 'center',
                  'font-size': '22px',
                  background: 'white',
                  color: 'black'
                }).text(link);
              }, 200);
              $scope.modalShown = true;
            }
          }
        }
      });

      $scope.gameTour = introJs();

      $scope.gameTour.setOptions({
        steps: [{
          intro: 'Welcome to cards for humanity (the coolest people call it CFH). You want to play this game ? Then let me take you on a quick tour'
        },

        {
          element: '#question-container-outer',
          intro: 'Game needs a minimum of 3 players to start. Wait for the minimum number of players then start the game. Also when the game starts, the questions are displayed here'
        },
        {
          element: '#timer-container',
          intro: 'You have 20 seconds to submit an answer. After time out, the CZAR selects his favorite answer. Whoever submits CZAR\'s favorite answer wins the round'
        },
        {
          element: '#answers-container',
          intro: 'These are the rules of the game',
          position: 'top'
        },
        {
          element: '#abandon-game-button',
          intro: 'Played enough ? Click here to quit game'
        },
        {
          element: '#tweet-container',
          intro: 'Want to tell others about the game ? share on twitter'
        }
        ],
        showStepNumbers: true,
        disableInteraction: true,
        overlayOpacity: 0.5,
        showBullets: false
      });

      $scope.takeTour = () => {
        if (!localStorage.takenTour) {
          const timeout = setTimeout(() => {
            $scope.gameTour.start();
            clearTimeout(timeout);
          }, 500);
          localStorage.setItem('takenTour', true);
        }
      };

      $scope.retakeTour = () => {
        localStorage.removeItem('takenTour');
        $scope.takeTour();
      };

      if ($location.search().game && !(/^\d+$/).test($location.search().game)) {
        game.joinGame('joinGame', $location.search().game);
      } else if ($location.search().custom) {
        game.joinGame('joinGame', null, true);
      } else {
        game.joinGame();
      }
    }]);
