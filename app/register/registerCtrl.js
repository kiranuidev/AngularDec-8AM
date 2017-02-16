(function () {

    function registerCtrl(lookupSvc) {
        var vm = this;
        vm.user = {
            userName:"kiran"
        };
        vm.register = function () {
            console.log(vm.user);
        }
        vm.DobRange = {
           maxdate:"-18Y"
        };
        vm.DateofReservationRange = {
            mindate: "0D",
            maxdate: "+1M"
        };
        // vm.countries = lookupSvc.getCountries();

        lookupSvc.getCountries()
            .then(function (res) {
                console.log(res);
            })
            .catch(function (err) {
                console.log(err);
            })
        vm.selectedCountry = lookupSvc.defaultCountry();
        /* angular.forEach( vm.countries, function(item){
            if(item.code=="IN"){
                //vm.selectedCountry=item;
            }
         })*/
        lookupSvc.getCountriesFromJson()
            .then(function (res) {
                console.log(res);
                vm.countries = res;
            })
            .catch(function (err) {
                console.log(err);
            });
        
        vm.helpLineNumber ="9484884848";

    }
    angular.module("register")
        .controller("registerCtrl", ["lookupService", registerCtrl]);

})();
