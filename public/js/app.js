angular.module('mean', ['ngCookies', 'ngResource', 'ui.bootstrap', 'ui.route', 'mean.system', 'mean.directives', 'firebase'])
  .config(['$routeProvider',
    function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/index.html'
        })
        .when('/app', {
          templateUrl: '/views/app.html',
        })
        .when('/privacy', {
          templateUrl: '/views/privacy.html',
        })
        .when('/bottom', {
          templateUrl: '/views/bottom.html'
        })
        .when('/signin', {
          templateUrl: '/views/signin.html'
        })
        .when('/signup', {
          templateUrl: '/views/signup.html'
        })
        .when('/dashboard', {
          templateUrl: '/views/dashboard.html',
          resolve: {
            auth: Authenticate => Authenticate.authenticate()
          }
        })
        .when('/choose-avatar', {
          templateUrl: '/views/choose-avatar.html'
        })
        .otherwise({
          redirectTo: '/'
        });
    }
  ]).config(['$locationProvider',
    function ($locationProvider) {
      $locationProvider.hashPrefix('!');
    }
  ]).run(['$rootScope', function ($rootScope) {
    $rootScope.safeApply = function (fn) {
      const phase = this.$root.$$phase;
      if (phase === '$apply' || phase === '$digest') {
        if (fn && (typeof (fn) === 'function')) {
          fn();
        }
      } else {
        this.$apply(fn);
      }
    };
  }])
  .run(['DonationService', function (DonationService) {
    window.userDonationCb = function (donationObject) {
      DonationService.userDonated(donationObject);
    };
  }])
  .run(($rootScope, $location) => {
    // If the route change failed due to authentication error, redirect them out
    $rootScope.$on('$routeChangeError', (event, current, previous, rejection) => {
      if (rejection === 'Not Authenticated') {
        $location.path('/signin');
      }
    });
  })
  .factory('Authenticate', ($q, $window) => ({
    authenticate: () => {
      const token = $window.localStorage.getItem('token');
      if (token) {
        return true;
      }
      return $q.reject('Not Authenticated');
    }
  }));

angular.module('mean.system', []);
angular.module('mean.directives', []);
