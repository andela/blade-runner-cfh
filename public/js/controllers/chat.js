angular.module('mean.system')
  .controller('chatController', [
    '$scope',
    'game',
    '$firebaseArray',
    ($scope, game, $firebaseArray) => {
      $scope.message = '';
      const ref = new Firebase('https://blade-runner-cfh-ee939.firebaseio.com/');
      $scope.chatMessages = $firebaseArray(ref);
      $scope.username = game.players[game.playerIndex];

      $scope.addMessage = (event) => {
        // on keypress 13 === enter
        if (event.which === 13 && $scope.message !== '') {
          const data = game.players[game.playerIndex];
          const payload = {
            avatar: data.avatar,
            username: data.username,
            message: $scope.message,
            timestamp: new Date(Date.now()).toLocaleTimeString()
          };
          $scope.chatMessages.$add(payload);
          $scope.message = '';
        }
      };

      $scope.toggleWindow = () => {
        const chatIcon = $('#chat-icon');
        if (chatIcon.hasClass('is-opened')) {
          chatIcon.removeClass('is-opened');
          chatIcon.addClass('is-closed');
        } else {
          chatIcon.removeClass('is-closed');
          chatIcon.addClass('is-opened');
        }
      };
      $(document).ready(() => {
        const emoji = $('#emoji').emojioneArea({
          emojiPlaceholder: ':smile_cat:',
          placeholder: 'Type something here',
          events: {
            keyup: (editor, event) => {
              if (event.which === 13) {
                $scope.message = (emoji.data('emojioneArea').getText());
                emoji.data('emojioneArea').setText('');
                $scope.addMessage(event);
              }
            }
          }
        });
      });
    }
  ]);
