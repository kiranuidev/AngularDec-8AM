
// function loopThorughVehicles(){

//     //for each vheicles
//     //buildTr()
//     //append Tr to table
//     table.append(tr);
// }

// function buildTr(){
//     //call builTd to build each coloumn
//     //append column to tr

//     yearTd = buildTd(year);
//     makeTd= buildTd(make);
//     modelTd=builTd(model);
//     tr.appendChild(yearTd);
//     tr.appendChild(makeTd);
//     tr.appendChild(modeltd);
//     return tr;
// }

// function buildTd(data){
// var td = document.createElement("td");
// td.innerHTML =data;
// return td;
// }
function buildTable(){
  var tbl = document.getElementById("tblVehicles");
  for(var i=0;i<vehicles.length;i++){
      //in the first iterataion.
     var row= buildTableRow(vehicles[i]);
     tbl.appendChild(row);
  }

}


function buildTableRow(vehicle) {
    var row = document.createElement("tr");
    var yearColumn = buildColumn(vehicle.Year);
    var makeColumn = buildColumn(vehicle.Make);
    var modelColumn = buildColumn(vehicle.Model);
    //append three columns to row
    row.appendChild(yearColumn);
    row.appendChild(makeColumn);
    row.appendChild(modelColumn);
    return row;
}

function buildColumn(data) {
    var column = document.createElement("td");
    column.innerText = data;
    return column;
}

buildTable();