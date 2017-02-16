(function(){
    
    function headerCtrlFn($scope){
      var vm=this;
        vm.brandName="Good Services";
        vm.phoneNumber="1234567890";
        vm.navItems =["Login","Register","Products","Cart","Logout"];
        vm.loginTemplate ="app/login/login.tpl.html";
          vm.registerTemplate ="app/register/register.tpl.html";
        vm.productsTemplate ="app/products/products.tpl.html";
        
        vm.loadView = function(param){
          console.log(param); 
            if(param=="Login"){
                vm.loadTemplate=vm.loginTemplate;
            }
            else if(param=="Register"){
                vm.loadTemplate=vm.registerTemplate;
            }
            else if(param=="Products"){
               vm.loadTemplate=vm.productsTemplate; 
            }
        };
        $scope.type=["video"];
        $scope.url="../videos/demo1.mp4";
        
    }
    angular.module("header")
    .controller("headerCtrl",["$scope",headerCtrlFn]);
})();