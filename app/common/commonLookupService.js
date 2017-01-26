(
    function () {
        function lookupServiceFn() {
            var countries = [{
                    code: "IN",
                    name: "India"
                    },
                {
                    code: "USA",
                    name: "United States"
                    }];
            this.getCountries = function () {
                return countries;

            };
            this.defaultCountry = function () {
                var country =""
                angular.forEach(countries, function (item) {
                    if (item.code == "IN") {
                        country= item;
                    }
                });
                return country;
            };
        }
        angular.module("common")
            .service("lookupService", [lookupServiceFn])
    }
)();
