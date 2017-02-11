angular.module('app')
.directive('petDir', function(){
  return {
    restrict: 'E',
    templateUrl: '../views/pet-tmpl.html',
    scope: {
      pet: '='
    }
  }
})
