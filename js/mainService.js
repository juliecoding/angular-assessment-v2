angular.module('app').service('mainService', function($http, $stateParams){

  var URL = 'http://practiceapi.devmounta.in/pets'

  this.getPets = function() {
    return $http({
      method: 'GET',
      url: URL
    })
  }

  // var id = $stateParams;
  //
  this.getSinglePet = function(id) {
    return $http({
      method: 'GET',
      url: URL + '/' + id
    })
  }

});
