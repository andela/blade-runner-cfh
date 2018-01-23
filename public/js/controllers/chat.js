angular.module('mean.system')
  .controller('chatController', [
    '$scope',
    'game',
    '$firebaseArray',
    ($scope, game, $firebaseArray) => {
      $scope.message = '';
      // const ref = new Firebase(`https://blade-runner-cfh-ee939.firebaseio.com/${game.gameID}`);
      // $scope.chatMessages = $firebaseArray(ref);
      $scope.username = game.players[game.playerIndex];
      $scope.unreadMessageCount = null;
      $scope.icon = false;

      let previousMessageCount = 0;
      let newMessageCount = 0;
      let unreadMessageCount = 0;
      let toogleChatPanel = false;

      $scope.$watch(() => {
        if (!toogleChatPanel) {
          newMessageCount = $scope.chatMessages.length;
          unreadMessageCount = newMessageCount - previousMessageCount;
          $scope.unreadMessageCount = unreadMessageCount <= 0 ? null : unreadMessageCount;
        } else {
          previousMessageCount = $scope.chatMessages.length;
          $scope.unreadMessageCount = null;
        }
      });

      $scope.scrollDownMessagePanel = () => {
        $('.chat-content').stop().animate({
          scrollTop: $('.chat-content')[0].scrollHeight
        }, 2000);
      };

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
          $scope.scrollDownMessagePanel();
        }
      };

      $scope.toggleWindow = () => {
        const chatWindow = $('#chat-window');
        if (chatWindow.hasClass('is-closed')) {
          chatWindow.removeClass('is-closed');
          chatWindow.addClass('is-opened');
          $scope.icon = true;
          toogleChatPanel = true;
        } else {
          chatWindow.removeClass('is-opened');
          chatWindow.addClass('is-closed');
          $scope.icon = false;
          toogleChatPanel = false;
        }
      };
      $(document).ready(() => {
        const ref = new Firebase(`https://blade-runner-cfh-ee939.firebaseio.com/${game.gameID}`);
        $scope.chatMessages = $firebaseArray(ref);
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
