angular.module("app").controller("petCtrl", function($scope, mainService, $stateParams) {

  console.log($stateParams.id);

  mainService.getSinglePet($stateParams.id).then(function(response){
    console.log("Pet ctrl says", response);
    $scope.singlePet = response.data;
  })

  //   var getSinglePet = function() {
  //   return $http({
  //     method: 'GET',
  //     url: URL + $stateParams
  //   }).then(function(response){
  //     $scope.singlePet = response;
  //   })
  // }

});
