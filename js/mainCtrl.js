// INITIALIZE CONTROLLER
// ============================================================
angular.module("app").controller("mainCtrl", function($scope, mainService) {

  mainService.getPets().then(function(response){
    console.log("Hello from the mainCtrl", response);
    $scope.pets = response.data;
  })

});
