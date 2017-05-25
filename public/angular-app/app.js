angular.module('angular-boilerplate', ['ngRoute']).config(config);

function config($routeProvider,$locationProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider
    .when('/', {
      templateUrl: 'angular-app/views/home/home.html'
    })
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
}
