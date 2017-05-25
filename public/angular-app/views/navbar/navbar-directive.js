angular.module('straffon-orthopedics').directive('navigation',navigation);

function navigation() {
  return{
    restrict: 'E',
    templateUrl: 'angular-app/views/navbar/navbar.html'
  };
}
