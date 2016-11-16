var open = document.getElementById("openAdd");
var add = document.getElementById("addItem");
var ttab = document.getElementById("topTable");
var botdiv = document.getElementById("botDiv");
var limit = document.getElementById("limitin");
var limitbtn = document.getElementById("limitbtn");


//set the warehouse limit
var limval = 30;
limit.value = 30;

//set items in warehouse when it opens
var ttabVal = [
    ['Candele', 'Cera', 'Micce'],
    [1, 2, 3]
];

//set number of items in warehouse when it opens
var ttabCells = 3;

//create the initial table of the first items in the warehouse
for (var i=0; i<2; i++){
    var row = ttab.insertRow(i);
    for(var j=0; j<ttabCells; j++){
        row.insertCell(j).innerHTML = ttabVal[i][j];
    }
}

/**
 * @brief Reads the values stored in the inputs of the bottom table
 * @return Values of the bottom table (= the items to be stored)
 */
function readBot(){
    return [
        [document.getElementById("r0c0").value, parseInt(document.getElementById("r0c1").value)]
    ];
}

/**
 * @brief Update the HTML top table to show the updated values of the matrixes
 */
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


/**
 * @brief Checks the top and the bottom tabs and updates matrixes
 */

function checktabs() {
    var btab = readBot();
    var limits = checklimits();
    var checkall = (btab[0][1] != undefined && btab[0][0] != undefined && btab[0][1] != NaN && btab[0][0] != NaN && limits);
    var flag = true;
    for(var j=0; j<ttabCells; j++){
        if (checkall){
            if (btab[0][0] == ttabVal[0][j] && limval>(parseInt(ttabVal[1][j]) + parseInt(btab[0][1]))){
                ttabVal[1][j] = parseInt(ttabVal[1][j]) + parseInt(btab[0][1]);
                flag=false;
            }
        }
    }
    if (flag && checkall){
        if(limval>btab[0][1]){
            console.log("limval: " + limval + " " + typeof(limval) + "btab[0][1]" + btab[0][1] + typeof(btab[0][1]));
            ttabVal[0][ttabCells] = btab[0][0];
            ttabVal[1][ttabCells] = btab[0][1];
            ttabCells += 1;
        }
        else{
            alert("Exceed limits");
        }
    }
    flag=true;
    buildTable();
    hide();
}

/**
 * @brief Changes the value of limval (the limit of items to be stored)
 */
function changelimit(){
    limval = parseInt(limit.value);
    console.log("Limval:" + limval + typeof(limval));
    checklimits();
}


/**
 * @brief Checks if limits are respected for all values in the warehouse
 * @return A boolean value, true if limits are respected, false if not
 */
function checklimits(){
    var flag=true;
    for(i=0; i<ttabCells; i++){
        if(limval<ttabVal[1][i]){
            console.log('lim: ' + limval + ', ttabval:' + ttabVal[1][i]);
            flag=false;
        }
    }
    if(!flag) alert("Exceeded limits");
    return flag;
}


/**
 * @brief Hides the bottom table and the add to warehouse button
 */
function hide(){
    botdiv.style.visibility = 'hidden';    
    add.style.visibility = 'hidden';     
}

/**
 * @brief Changes the visibility of the bottom table and warehouse button to show them
 */
function show () {
    checklimits();
    botdiv.style.visibility = 'visible';    
    add.style.visibility = 'visible';    
}