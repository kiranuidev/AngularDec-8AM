(function(){
    
    function productsCtrl(productsSvc){
        var vm = this;
        productsSvc.getProducts()
        .then( function(res){
            console.log(res);
            vm.products= res.data.products;
        })
        .catch(function(err){
            console.log(err);
        });
        vm.minimumProducts=10;
        vm.showMore = function(){
          vm.minimumProducts+=10;  
        }; 
        vm.orderByCrietria="Price";
        vm.orderByPrice = function(){
            if( vm.orderByCrietria=="Price"){
                vm.orderByCrietria="-Price";
            }
            else{
                 vm.orderByCrietria="Price";
            }
        }
    }
    angular.module("products")
    .controller("productsCtrl",["productsSvc",productsCtrl]);
    
})();














