var body = document.getElementsByTagName('body')[0];

//code inspired by https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
var tble = document.createElement("table");
var tblBody = document.createElement("tbody");

//create table headers
var rowHead = document.createElement("tr");
for (var k = 0; k < 4; k++) {
    var header = document.createElement("th");
    var headerText = document.createTextNode("Header " + (k+1));
    header.appendChild(headerText);
    rowHead.appendChild(header);
}
tblBody.appendChild(rowHead);

//create cell rows and individual cells of those rows
 for (var i = 0; i < 3; i++) {
    var row = document.createElement("tr");

    for (var j = 0; j < 4; j++) {
        var cell = document.createElement("td");
        var cellText = document.createTextNode((i+1) + ", " + (j+1));
        cell.appendChild(cellText);
        row.appendChild(cell);
    }
    tblBody.appendChild(row);
 }
tble.appendChild(tblBody);
body.appendChild(tble);
tble.setAttribute("border", "6");

//paragraph that is parent of all buttons
var buttonPara = document.createElement("p");
body.appendChild(buttonPara);

//selecting the 1,1 cell with a border
var rowIndex = 1;
var cellIndex = 0;
tble.rows[rowIndex].cells[cellIndex].style.border = '3px solid black';

//code inspired by https://www.w3schools.com/jsref/dom_obj_tablerow.asp
//code inspired by https://www.w3schools.com/jsref/dom_obj_table.asp
//create button up
var buttonUp = document.createElement("input");
buttonUp.type = "button";
buttonUp.value = "Up";
buttonUp.onclick = function() {
    var currentIndex = tble.rows[rowIndex].cells[cellIndex];
    if(rowIndex == 1){
        currentIndex = currentIndex;
    }
    else {
        tble.rows[rowIndex].cells[cellIndex].style.border = '1px solid black';
        rowIndex = rowIndex - 1;
        currentIndex = tble.rows[rowIndex].cells[cellIndex];
        currentIndex.style.border = '3px solid black'
    }
};
buttonPara.appendChild(buttonUp);

//create button down
var buttonDown = document.createElement("input");
buttonDown.type = "button";
buttonDown.value = "Down";
buttonDown.onclick = function() {
    var currentIndex = tble.rows[rowIndex].cells[cellIndex];
    if(rowIndex == 3){
        currentIndex = currentIndex;
    }
    else {
        tble.rows[rowIndex].cells[cellIndex].style.border = '1px solid black';
        rowIndex = rowIndex + 1;
        currentIndex = tble.rows[rowIndex].cells[cellIndex];
        currentIndex.style.border = '3px solid black';
    }
};
buttonPara.appendChild(buttonDown);

//create button left
var buttonLeft = document.createElement("input");
buttonLeft.type = "button";
buttonLeft.value = "Left";
buttonLeft.onclick = function() {
    var currentIndex = tble.rows[rowIndex].cells[cellIndex];
    if(cellIndex == 0){
        currentIndex = currentIndex;
    }
    else {
        tble.rows[rowIndex].cells[cellIndex].style.border = '1px solid black';
        cellIndex = cellIndex - 1;
        currentIndex = tble.rows[rowIndex].cells[cellIndex];
        currentIndex.style.border = '3px solid black';
    }
};
buttonPara.appendChild(buttonLeft);

//create button right
var buttonRight = document.createElement("input");
buttonRight.type = "button";
buttonRight.value = "Right";
buttonRight.onclick = function(){
    var currentIndex = tble.rows[rowIndex].cells[cellIndex];
    if(cellIndex == 3){
        currentIndex = currentIndex;
    }
    else {
        tble.rows[rowIndex].cells[cellIndex].style.border = '1px solid black';
        cellIndex = cellIndex + 1;
        currentIndex = tble. rows[rowIndex].cells[cellIndex];
        currentIndex.style.border = '3px solid black';
    }
};
buttonPara.appendChild(buttonRight);

//create mark cell
var markCell = document.createElement("input");
markCell.type = "button";
markCell.value = "Mark Cell";
markCell.onclick = function() {
    tble.rows[rowIndex].cells[cellIndex].style.backgroundColor = 'yellow';
};
buttonPara.appendChild(markCell);


