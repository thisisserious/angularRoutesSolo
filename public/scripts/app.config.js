angular.module('nextGenApp')
       .config(function($routeProvider, $locationProvider) {
          $routeProvider.when('/picard', {
            templateUrl: 'views/picard.html'
          }).when('/worf', {
            templateUrl: 'views/worf.html'
          }).when('/data', {
            templateUrl: 'views/data.html'
          });

          $locationProvider.html5Mode(true);
        });
