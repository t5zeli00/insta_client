// Ionic Starter App

<<<<<<< HEAD
var app = angular.module('instagram', ['ionic', 'instagram.controller', 'instagram.services', 'ngCordova']);

app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            // cordova.plugins.Keyboard.disableScroll(true);
        }
        if(window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});


app.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.tabs.position("bottom");
    $ionicConfigProvider.tabs.style("standard");
    $stateProvider

        .state('register', {
            url: '/register',
            cache: false,
            templateUrl: 'templates/register.html',
            controller: 'RegisterCtrl'
        })

        .state('login', {
            url: '/login',
            cache: false,
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl'
        })

        .state('app', {
            url: '/app',
            absract: true,
            templateUrl: 'templates/app.html',
            controller: 'AppCtrl'
        })

        .state('app.home', {
            url: '/home',
            cache: false,
            reload: true,
            views: {
                'app-home': {
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl'
                }
            }
        })

        .state('app.home-user', {
            url: '/home-user/:userid',
            cache: false,
            views: {
                'app-home': {
                templateUrl: 'templates/account.html',
                controller: 'UsersCtrl'
                }
            }
        })

        .state('app.home-user-followers', {
            url: '/home-user-followers/:userid',
            cache: false,
            views: {
                'app-home': {
                templateUrl: 'templates/follow.html',
                controller: 'FollowCtrl'
                }
            },
            data: {
                header: 'followers'
            }
        })

        .state('app.home-user-followings', {
            url: '/home-user-followings/:userid',
            cache: false,
            views: {
                'app-home': {
                templateUrl: 'templates/follow.html',
                controller: 'FollowCtrl'
                }
            },
            data: {
                header: 'followings'
            }
        })

        .state('app.search', {
            url: '/search',
            cache: false,
            views: {
                'app-search': {
                templateUrl: 'templates/search.html',
                controller: 'SearchCtrl'
                }
            }
        })

        .state('app.search-user', {
            url: '/search-user/:userid',
            cache: false,
            views: {
                'app-search': {
                templateUrl: 'templates/account.html',
                controller: 'UsersCtrl'
                }
            }
        })

        .state('app.search-user-followers', {
            url: '/search-user-followers/:userid',
            cache: false,
            views: {
                'app-search': {
                templateUrl: 'templates/follow.html',
                controller: 'FollowCtrl'
                }
            },
            data: {
                header: 'followers'
            }
        })

        .state('app.search-user-followings', {
            url: '/search-user-followings/:userid',
            cache: false,
            views: {
                'app-search': {
                templateUrl: 'templates/follow.html',
                controller: 'FollowCtrl'
                }
            },
            data: {
                header: 'followings'
            }
        })

        .state('app.camera', {
            url: '/camera',
            cache: false,
            views: {
                'app-camera': {
                templateUrl: 'templates/camera.html',
                controller: 'CameraCtrl'
                }
            }
        })

        .state('app.activity', {
             url: '/activity',
             cache: false,
             views: {
                 'app-activity': {
                 templateUrl: 'templates/activity.html',
                 controller: 'ActivityCtrl'
                 }
             }
        })

        .state('app.account', {
            url: '/account',
            cache: false,
            reload: true,
            views: {
                'app-account': {
                templateUrl: 'templates/account.html',
                controller: 'AccountCtrl'
                }
            }
        })

        .state('app.account-followers', {
            url: '/account-followers',
            cache: false,
            views: {
                'app-account': {
                templateUrl: 'templates/follow.html',
                controller: 'FollowCtrl'
                }
            },
            data: {
                header: 'followers'
            }
        })

        .state('app.account-followings', {
            url: '/account-followings',
            cache: false,
            views: {
                'app-account': {
                templateUrl: 'templates/follow.html',
                controller: 'FollowCtrl'
                }
            },
            data: {
                header: 'followings'
            }
        })

        .state('app.account-user', {
            url: '/account-user/:userid',
            cache: false,
            views: {
                'app-account': {
                templateUrl: 'templates/account.html',
                controller: 'UsersCtrl'
                }
            }
        })

        .state('app.account-user-followers', {
            url: '/account-user-followers/:userid',
            cache: false,
            views: {
                'app-account': {
                templateUrl: 'templates/follow.html',
                controller: 'FollowCtrl'
                }
            },
            data: {
                header: 'followers'
            }
        })

        .state('app.account-user-followings', {
            url: '/account-user-followings/:userid',
            cache: false,
            views: {
                'app-account': {
                templateUrl: 'templates/follow.html',
                controller: 'FollowCtrl'
                }
            },
            data: {
                header: 'followings'
            }
        })

        .state('app.edit', {
            url: '/edit',
            cache: false,
            reload: true,
            views: {
                'app-account': {
                templateUrl: 'templates/account-edit.html',
                controller: 'EditCtrl'
                }
            }
        })
        ;

    $urlRouterProvider.otherwise('/login');
=======
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('app', ['ionic', 'ngCordova', 'app.controllers', 'app.routes', 'app.directives','app.services',]);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs) 
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

app.config(function($stateProvider, $ionicConfigProvider, $sceDelegateProvider){  

  $sceDelegateProvider.resourceUrlWhitelist([ 'self','*://www.youtube.com/**', '*://player.vimeo.com/video/**']);

  
   $ionicConfigProvider.tabs.position("bottom");
   $ionicConfigProvider.tabs.style("standard");

   $stateProvider

   .state('app.camera', {
      url: '/camera',          
      views: {
         'app-camera': {
          templateUrl: 'templates/camera.html',
          controller: 'cameraCtrl'
      }
    }
   });
 
})


/*
  This directive is used to disable the "drag to open" functionality of the Side-Menu
  when you are dragging a Slider component.

.directive('disableSideMenuDrag', ['$ionicSideMenuDelegate', '$rootScope', function($ionicSideMenuDelegate, $rootScope) {
    return {
        restrict: "A",  
        controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {

            function stopDrag(){
              $ionicSideMenuDelegate.canDragContent(false);
            }

            function allowDrag(){
              $ionicSideMenuDelegate.canDragContent(true);
            }

            $rootScope.$on('$ionicSlides.slideChangeEnd', allowDrag);
            $element.on('touchstart', stopDrag);
            $element.on('touchend', allowDrag);
            $element.on('mousedown', stopDrag);
            $element.on('mouseup', allowDrag);

        }]
    };
}])
*/

/*
  This directive is used to open regular and dynamic href links inside of inappbrowser.
*/
app.directive('hrefInappbrowser', function() {
  return {
    restrict: 'A',
    replace: false,
    transclude: false,
    link: function(scope, element, attrs) {
      var href = attrs['hrefInappbrowser'];

      attrs.$observe('hrefInappbrowser', function(val){
        href = val;
      });
      
      element.bind('click', function (event) {

        window.open(href, '_system', 'location=yes');

        event.preventDefault();
        event.stopPropagation();

      });
    }
  };
>>>>>>> dabc0b6f0fa4aa48adf0087bcddeec9eaea27f40
});