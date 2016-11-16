var btn = document.getElementById("button");
var ttab = document.getElementById("topTable");
var botdiv = document.getElementById("botDiv");

var ttabVal = [
    ['A', 'B', 'C'],
    [1, 2, 3]
];

var ttabCells = 3;

for (var i=0; i<2; i++){
    var row = ttab.insertRow(i);
    for(var j=0; j<ttabCells; j++){
        row.insertCell(j).innerHTML = ttabVal[i][j];
    }
}

function readBot(){
    return [
        [document.getElementById("r0c0").value, document.getElementById("r0c1").value, document.getElementById("r0c2").value],
        [document.getElementById("r1c0").value, document.getElementById("r1c1").value, document.getElementById("r1c2").value]
    ];
}

function buildTable(){
    ttab.deleteRow(0);
    ttab.deleteRow(0);
    
    for (var i=0; i<2; i++){
        var row = ttab.insertRow(i);
        for(var j=0; j<ttabCells; j++){
            row.insertCell(j).innerHTML = ttabVal[i][j];
        }
    }
}

function checktabs() {
    var btab = readBot();
    var flag = true;
    
    for (var i=0; i<3; i++){
        for(var j=0; j<ttabCells; j++){
            if (btab[0][i] != undefined){                
                if (btab[0][i] == ttabVal[0][j]){
                    ttabVal[1][j] = parseInt(ttabVal[1][j]) + parseInt(btab[1][i]);
                    flag=false;
                }
            }
        }
        console.log(flag);
        if (flag){
            ttabVal[0][ttabCells] = btab[0][i];
            ttabVal[1][ttabCells] = btab[1][i];
            ttabCells += 1;
            console.log(ttab);
        }
        flag=true;
    }
    buildTable();
}

//new


var showed = false;

function show () {
    botdiv.style.visibility = 'visible';
    if (showed) {checktabs();}
    showed = true;
    
}