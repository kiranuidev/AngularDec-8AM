var first = document.getElementById("txtFirstNumber");
var second = document.getElementById("txtSecondNumber");
var result =  document.getElementById("txtResult");
//
function add(){
var total = parseInt(first.value)+parseInt(second.value);
result.value= total;
}

function sub(){
var total = parseInt(first.value)-parseInt(second.value);
result.value= total;
}

function multiply(){
var total = parseInt(first.value)*parseInt(second.value);
result.value= total;
}
function divide(){
var total = parseInt(first.value)/parseInt(second.value);
result.value= total;
}