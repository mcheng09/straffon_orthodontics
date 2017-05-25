angular.module('straffon-orthopedics', ['ngRoute','ui.bootstrap','ngTouch', 'ngAnimate','bootstrapLightbox']).config(config);
function config($routeProvider,$locationProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider
    .when('/', {
      templateUrl: 'angular-app/views/home/home.html',
      controller: 'HomeCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
}
