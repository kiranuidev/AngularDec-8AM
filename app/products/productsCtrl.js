(function(){
    
    function productsCtrl(productsSvc,$rootScope,$state){
        
         console.log($state);
        var vm = this;
        productsSvc.getProducts()
        .then( function(res){
            console.log(res);
            vm.products= res.data.products;
            vm.paginate.totalProductCount = vm.products.length;
            handlePaginateLogic();
        })
        .catch(function(err){
            console.log(err);
        });
        
        vm.paginate={
            totalProductCount:0,
            currentPage:1,
            maxSize:20
        };
        
        
        vm.minimumProducts=10;
        vm.showMore = function(){
          vm.minimumProducts+=10;  
        }; 
        
        vm.totalProductCount =0;
        vm.orderByCrietria="Price";
        vm.orderByPrice = function(){
            if( vm.orderByCrietria=="Price"){
                vm.orderByCrietria="-Price";
            }
            else{
                 vm.orderByCrietria="Price";
            }
        };
        vm.loadPaginatedProducts= function(){
            console.log(vm.paginate.currentPage);
            handlePaginateLogic();
            
        };
        
        function handlePaginateLogic(){
            var maxCount = vm.paginate.currentPage* vm.minimumProducts;
            var minCount = maxCount-10;
            vm.paginatedProducts = vm.products.slice(minCount,maxCount);
        }
        
        vm.addToCart = function(item){
            //send notification on adding item to cart.
            $rootScope.$broadcast("ITEM-ADDED",item);
            
        };
    }
    angular.module("products")
    .controller("productsCtrl",["productsSvc","$rootScope",
    "$state",productsCtrl]);
    
})();














