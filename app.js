var agePrompt = prompt("What is your age?");

if (agePrompt >= 18) alert('Welcome!')
else {
    alert('Sorry! Come back in a few years!')
    document.location = "http://www.google.com/";
}

//Puppy Calculator
function calculateDogAge(humanYears) {
    var humanYears = document.getElementById("solution").value;
    var dogYears = 7 * humanYears;
    console.log("Your doggie is " + dogYears + " years old in dog years!");
    document.getElementById("solution1").innerHTML = "Your doggie is " + dogYears + " years old </br> in dog years!";
}

calculateDogAge(1);
calculateDogAge(2);
calculateDogAge(5);

var x = 0;
while (x < 5) {
    console.log(x);
    x = x + 1;
};
var x = 5;
while (x < 5) {
    console.log(x);
    x = x + 1;
}
for (var i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + `is even`)
    } else {
        console.log(i + `is odd`)
    }
}
const today = new Date();
console.log(today);
//returns the current day in number form
const dayNumber = today.getDay();
//storing my output location
console.log(dayNumber);
const element = document.getElementById("message1")

function special() {
    if (dayNumber == 1) {
        return `1/2 off all oils`;
    } else if (dayNumber == 2) {
        return `2-for-1 Buy-one-Get-one Free day`;
    } else if (dayNumber == 3) {
        return `Buy-one-Get-one Free day`;
    } else if (dayNumber == 4) {
        return `Add a gummy`;
    } else if (dayNumber == 5) {
        return `Bring a friend get a extra treat`;
    } else if (dayNumber == 6) {
        return `Buy two edibles get one free`;
    } else if (dayNumber == 7) {
        return `Brunch and free samples`;
    } else (element.classList.add("hideme"))
}

console.log(`You got a` + special());
element.innerHTML=`Check out the Special today 👀` + `</br>` + special();

// let day;
// switch (new Date().getDay()) {
//     case 0:
//       day = "Brunch and free samples";
//       break;
//     case 1:
//       day = "1/2 off all oilsy";
//       break;
//     case 2:
//        day = "2-for-1 Buy-one-Get-one Free day";
//       break;
//     case 3:
//       day = "Buy-one-Get-one Free day";
//       break;
//     case 4:
//       day = "Add a gummy";
//       break;
//     case 5:
//       day = "Bring a friend get a extra treat";
//       break;
//     case 6:
//       day = "Buy two edibles get one free";
//   }
//   document.getElementById("message1").innerHTML = (`Today is ${day}`);
//   console.log("Today is " + day);


  const arrayCarousel = [
      "images/cbd.png",
      "images/cbd1.png",

 ]
  counter = 0

  function setImage () {

document.getElementById("carousel-cbd").src = arrayCarousel[counter];
//document.getElementById("carousel-cbd1").src = arrayCarousel[counter];
  

counter = (counter+1) % arrayCarousel.length;
}
setInterval(setImage, 2000);


// Create a table with doses
var smallDog = {	
    name: "U+1F9F4 1/4 ml= 1.75 mg",
    name1: "U+1F9F4 1/2 ml= 3.5 mg",
    name2: "U+1F9F4 3/4 ml= 5.25 mg",
    name3: "U+1F9F4 1 ml= 7 mg"


}
var medDog =
{
    name: "U+1F9F4 1/4 ml= 4.25 mg",
    name1: "U+1F9F4 1/2 ml= 8.5 mg",
    name2: "U+1F9F4 3/4 ml= 12.75 mg",
    name3: "U+1F9F4 1 ml= 17 mg"
}
var largeDog = 
{
    dose: "U+1F9F4 1/4 ml= 6.75 mg",
    dose1: "U+1F9F4 1/2 ml= 13.5 mg",
    dose2: "U+1F9F4 3/4 ml= 20.25 mg",
    dose3: "U+1F9F4 1 ml= 27 mg"
}
var giantDog = 
{
    dose: "U+1F9F4 1/4 ml= 9.25 mg",
    dose1: "U+1F9F4 1/2 ml= 18.5 mg",
    dose2: "U+1F9F4 3/4 ml= 27.75 mg",
    dose3: "U+1F9F4 1 ml= 37 mg"
}
var cat = 
{
    dose: "U+1F9F4 1/4 ml= 1.75 mg",
    dose1: "U+1F9F4 1/2 ml= 3.5 mg",
    dose2: "U+1F9F4 3/4 ml= 5.25 mg",
    dose3: "U+1F9F4 1 ml= 7 mg"   
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
    place.innerHTML = "75-100 lbs" + rex.name + "<br>" +
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

function addTable() {
    var myTableDiv = document.getElementById("myDynamicTable");
  
    var table = document.createElement('TABLE');
    table.border = '1';
  
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
  
    for (var i = 0; i < 3; i++) {
      var tr = document.createElement('TR');
      tableBody.appendChild(tr);
  
      for (var j = 0; j < 4; j++) {
        var td = document.createElement('TD');
        td.width = '75';
        td.appendChild(document.createTextNode("Cell " + i + "," + j));
        tr.appendChild(td);
      }
    }
    myTableDiv.appendChild(table);
  }
  addTable();




