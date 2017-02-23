(function(){
    
    function headerCtrlFn($scope,$rootScope,$translate){
      var vm=this;
        vm.brandName="Good Services";
        vm.phoneNumber="1234567890";
        vm.cartProducts=[];
        vm.navItems =["Login","Register","Products","Logout","Cart",];
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
        $rootScope.$on("ITEM-ADDED",function(evt,args){
            console.log(args);
            vm.cartProducts.push(args);
        }); 
        $scope.changeLagunage= function(type){
          $translate.use(type);
        }
        
    }
    angular.module("header")
    .controller("headerCtrl",["$scope","$rootScope","$translate",headerCtrlFn]);
})();