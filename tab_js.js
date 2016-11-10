var btn = document.getElementById("button");
var btab = document.getElementById("botTable");
var ttab = document.getElementById("topTable");
var botdiv = document.getElementById("botDiv");

var rowLength = ttab.rows.length;

//loops through rows
for (i = 0; i < rowLength; i++){
    //gets cells of current row
    var oCells = ttab.rows.item(i).cells;
    //gets amount of cells of current row
    var cellLength = oCells.length;
    //loops through each cell in current row
    for(var j = 0; j < cellLength; j++){
        // get your cell info here
        var cellVal = oCells.item(j).innerHTML;
    }
}

function hide (element) {
    element.style.visibility = 'hidden';
}

function show () {
    botdiv.style.visibility = 'visible';
}