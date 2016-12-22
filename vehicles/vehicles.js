//getYears();

function buildYearDropDown() {
    var yearDropdown = document.getElementById("ddlYear");
    var miniumYear = new Date().getFullYear() - 30;
    var maximumYear = new Date().getFullYear();
   
    for (var i = miniumYear; i <= maximumYear; i++) {
        var optionTag = document.createElement("option");
        optionTag.value = i;
        optionTag.textContent = i;
        yearDropdown.appendChild(optionTag);
    }
}

function loadMakes(){
    console.log("Makes...");
     var yearDropdown = document.getElementById("ddlYear");
    var selectedYear = yearDropdown.value;
    getMakes(selectedYear)
}


function getMakes(selectedYear){
    var selectedVehicles =[];
    for(var i=0;i<vehicles.length;i++){
        if(vehicles[i].Year == selectedYear){
            selectedVehicles.push(vehicles[i]);
        }
       //console.log(vehicles[i].Year);
       
    }
    console.log(selectedVehicles);
}
buildYearDropDown();