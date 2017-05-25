angular.module('angular-boilerplate').directive('navigation',navigation);

function navigation() {
  return{
    restrict: 'E',
    templateUrl: 'angular-app/views/navbar/navbar.html'
  };
}
