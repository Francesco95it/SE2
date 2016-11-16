var open = document.getElementById("openAdd");
var add = document.getElementById("addItem");
var ttab = document.getElementById("topTable");
var botdiv = document.getElementById("botDiv");

var ttabVal = [
    ['Candele', 'Cera', 'Micce'],
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
        [document.getElementById("r0c0").value, document.getElementById("r0c1").value]
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
    for(var j=0; j<ttabCells; j++){
        if (btab[0][1] != undefined && btab[0][0] != undefined && btab[0][1] != NaN && btab[0][0] != NaN){                
            if (btab[0][0] == ttabVal[0][j]){
                ttabVal[1][j] = parseInt(ttabVal[1][j]) + parseInt(btab[0][1]);
                flag=false;
            }
        }
    }
    console.log(flag);
    if (flag){
        ttabVal[0][ttabCells] = btab[0][0];
        ttabVal[1][ttabCells] = btab[0][1];
        ttabCells += 1;
        console.log(ttab);
    }
    flag=true;
    buildTable();
    hide();
}

function hide(){
    botdiv.style.visibility = 'hidden';    
    add.style.visibility = 'hidden';     
}

function show () {
    botdiv.style.visibility = 'visible';    
    add.style.visibility = 'visible';    
}