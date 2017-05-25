angular.module('straffon-orthopedics').controller('HomeCtrl', HomeCtrl);

function HomeCtrl($scope){
  $scope.myInterval = 4000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  $scope.slides = [
    {
      image: '../../images/home/carousel/carousel1.jpg'
    },
    {
      image: '../../images/home/carousel/carousel2.jpg'
    },
    {
      image: 'http://placehold.it/1280x500'
    }
  ];
}
