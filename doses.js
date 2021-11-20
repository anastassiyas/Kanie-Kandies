// Create a table with doses
var smallDog = {	
    dose: "&#129524; 1/4 ml= 1.75 mg",
    dose1: "&#129524; 1/2 ml= 3.5 mg",
    dose2: "&#129524; 3/4 ml= 5.25 mg",
    dose3: "&#129524; 1 ml= 7 mg"


}
var medDog =
{
    dose: "&#129524; 1/4 ml= 4.25 mg",
    dose1: "&#129524; 1/2 ml= 8.5 mg",
    dose2: "&#129524; 3/4 ml= 12.75 mg",
    dose3: "&#129524; 1 ml= 17 mg"
}
var largeDog = 
{
    dose: "&#129524; 1/4 ml= 6.75 mg",
    dose1: "&#129524; 1/2 ml= 13.5 mg",
    dose2: "&#129524; 3/4 ml= 20.25 mg",
    dose3: "&#129524; 1 ml= 27 mg"
}
var giantDog = 
{
    dose: "&#129524; 1/4 ml= 9.25 mg",
    dose1: "&#129524; 1/2 ml= 18.5 mg",
    dose2: "&#129524; 3/4 ml= 27.75 mg",
    dose3: "&#129524; 1 ml= 37 mg"
}
var cat = 
{
    dose: "&#129524; 1/4 ml= 1.75 mg",
    dose1: "&#129524; 1/2 ml= 3.5 mg",
    dose2: "&#129524; 3/4 ml= 5.25 mg",
    dose3: "&#129524; 1 ml= 7 mg"   
}

//Shows Object Properties when button is clicked
function display1() {
var place = document.getElementById("submit1");
for (value in smallDog) {
    place.innerHTML = "5-35 lbs" + "<br>" +
        " " + smallDog.dose + "<br>" +
        " " + smallDog.dose1 + "<br>" +
        " " + smallDog.dose2 + "<br>" +
        " " + smallDog.dose3 + "<br>" ;
}
};
//Clears object prroperties when button is clicked
function clear1() {
    var place = document.getElementById("submit1");
    place.innerHTML = "See Details";
   
};


function display2() {
var place = document.getElementById("submit2");
for (value in medDog) {
    place.innerHTML = "35-75 lbs" + "<br>" +
    " " + medDog.dose + "<br>" +
    " " + medDog.dose1 + "<br>" +
    " " + medDog.dose2 + "<br>" +
    " " + medDog.dose3 + "<br>" ;
}
};

function clear2() {
var place = document.getElementById("submit2");
place.innerHTML = "See Details";

};

function display3() {
var place = document.getElementById("submit3");
for (value in largeDog) {
    place.innerHTML = "75-100 lbs" + "<br>" +
    " " + largeDog.dose + "<br>" +
    " " + largeDog.dose1 + "<br>" +
    " " + largeDog.dose2 + "<br>" +
    " " + largeDog.dose3 + "<br>" ;
}
};

function clear4() {
var place = document.getElementById("submit4");
place.innerHTML = "See Details";

};

function display4() {
    var place = document.getElementById("submit4");
    for (value in giantDog) {
        place.innerHTML = "100 lbs +" + "<br>" +
        " " + giantDog.dose + "<br>" +
        " " + giantDog.dose1 + "<br>" +
        " " + giantDog.dose2 + "<br>" +
        " " + giantDog.dose3 + "<br>" ;
    }
    };
    
    function clear4() {
    var place = document.getElementById("submit4");
    place.innerHTML = "See Details";
    
    };
    function display5() {
        var place = document.getElementById("submit5");
        for (value in cat) {
            place.innerHTML = "5-35 lbs" + "<br>" +
            " " + cat.dose + "<br>" +
            " " + cat.dose1 + "<br>" +
            " " + cat.dose2 + "<br>" +
            " " + cat.dose3 + "<br>" ;
        }
        };
        
        function clear5() {
        var place = document.getElementById("submit5");
        place.innerHTML = "See Details";
        
        };






//Create a table 

// function addTable() {
//     var myTableDiv = document.getElementById("myDynamicTable");
  
//     var table = document.createElement('TABLE');
//     table.border = '1';
  
//     var tableBody = document.createElement('TBODY');
//     table.appendChild(tableBody);
  
//     for (var i = 0; i < 3; i++) {
//       var tr = document.createElement('TR');
//       tableBody.appendChild(tr);
  
//       for (var j = 0; j < 4; j++) {
//         var td = document.createElement('TD');
//         td.width = '75';
//         td.appendChild(document.createTextNode("Cell " + i + "," + j));
//         tr.appendChild(td);
//       }
//     }
//     myTableDiv.appendChild(table);
//   }
//   addTable();




