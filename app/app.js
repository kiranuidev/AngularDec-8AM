(function () {

    //module creation
    //first param: Module Name
    //second params: module names injected.
    angular.module("goodServices", ["ui.bootstrap", "login", "register", "header", "common", "products", "ui.router"]);

    //consuming the module
    angular.module("goodServices")
        .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider, initProvider) {
            $urlRouterProvider.otherwise("/register");
            //define the routers using $state provider.
            var login = {
                templateUrl: "app/login/login.tpl.html",
                url: "/login",
                controller:"loginCtrl"
            };
            var register = {
                url: "/register",
                templateUrl: "app/register/register.tpl.html",
                controller:"registerCtrl as rc"
            };
            var products = {
                url: "/products",
                templateUrl: "app/products/products.tpl.html",
                controller:"productsCtrl as pc"
            };

            //declare states
            $stateProvider.state("login", login);
            $stateProvider.state("register", register);
            $stateProvider.state("products", products);
        }])
        .run(function () {
            console.log("I m the good services run function");
        })
        .provider("init", function () {
            console.log("provider-good");
            this.$get = function () {

            };
        });

})();








