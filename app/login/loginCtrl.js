(function(){
  function loginCtrl($scope,$http){
      //$scope.username="kiran";
      $scope.user={};
      $scope.username="";
      $scope.getCountries = function(val) {
    return $http.get('api/countries.json', {
      params: {
        country: val,
        sensor: false
      }
    }).then(function(response){
       return $scope.countries = response.data.countries;
        /*_.findAll($scope.countries,function(item){
        
        })*/
    /*  return response.data.countries.map(function(item){
        return item;
      });*/
    });
          
          
  };
      $scope.$watch('username',function(newVal,oldVal){
              console.log("Old Value: "+oldVal);
              
              console.log("New Value: "+newVal);
          });
    setTimeout(function(){
        $scope.username="Ravi";
        $scope.$apply();
    },5000);
  }
    angular.module("login")
    .controller("loginCtrl",["$scope","$http",loginCtrl]);    
})();