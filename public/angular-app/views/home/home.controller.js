angular.module('seacliffbeauty').controller('HomeCtrl', HomeCtrl);

function HomeCtrl($scope){
  $scope.myInterval = 4000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  $scope.slides = [
    {
      image: '../../images/home/carousel/carousel1.png'
    },
    {
      image: '../../images/home/carousel/carousel2.png'
    },
    {
      image: '../../images/home/carousel/carousel3.png'
    },
    {
      image: '../../images/home/carousel/carousel4.png'
    },
    {
      image: '../../images/home/carousel/carousel5.png'
    },
    {
      image: '../../images/home/carousel/carousel6.png'
    }
  ];
}
