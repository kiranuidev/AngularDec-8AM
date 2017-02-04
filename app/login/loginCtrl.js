(function(){
  function loginCtrl($scope){
      //$scope.username="kiran";
      $scope.user={};
  }
    angular.module("login")
    .controller("loginCtrl",["$scope",loginCtrl]);    
})();