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
    "images/dog-benefits.png",
    "images/CBD-for-dogs.jpg",
    "images/cbd-oil.gif",
    "images/cbd1.png",

 ]
  counter = 0

  function setImage () {

document.getElementById("carousel-cbd").src = arrayCarousel[counter];
//document.getElementById("carousel-cbd1").src = arrayCarousel[counter];
  

counter = (counter+1) % arrayCarousel.length;
}
setInterval(setImage, 2000);


