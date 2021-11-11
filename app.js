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
//returns the currrent day in number form
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

let day;
switch (new Date().getDay()) {
    case 0:
      day = "Brunch and free samples";
      break;
    case 1:
      day = "1/2 off all oilsy";
      break;
    case 2:
       day = "2-for-1 Buy-one-Get-one Free day";
      break;
    case 3:
      day = "Buy-one-Get-one Free day";
      break;
    case 4:
      day = "Add a gummy";
      break;
    case 5:
      day = "Bring a friend get a extra treat";
      break;
    case 6:
      day = "Buy two edibles get one free";
  }
  document.getElementById("message1").innerHTML = (`Today is ${day}`);
  console.log("Today is " + day);


//Array Literal
//WE assign to Array to a variable
//JS Keyword build-in JAvascript methods new Array()
//JS constructor method
//create an array of at least 7 of your classmate`s name
//Access an Array
//const colors=[`brown`, `pink`,`blue`, `teal`, `red`]
//const myAges=[10, 13, 16, 18, 21]
//const compNums=[12>12, 9===`nine`, 1==2, `eight`===`EIGHT`, 5>=5]


//var colors= new Array(`brown`,`pink`,`blue`,`teal`,`red`)
//var myAges= new Array(10, 13, 16, 18, 21)


//const colors= [];
//colors[0]=`brown`;
//colors[1]=`pink`;
//colors[2]=`teal`;
//colors[3]=`red`;
//colors[4]=`blue`;


var classmates=[`Shelby`, `Sebastian`, `Anna`, `April`, `Aaron`, `Lucas`, `Luz`, `Ali`]

console.log(classmates);

//loop over an array //for loop
for(let i = 0; i < classmates.length; i++){
    console.log(classmates);
}

//Array methods
classmates.push()
classmates.pop();//`pop` removes last item from array
classmates.unshift(`Ali`); //adds an item to the begginning of an array
classmates.shift();//removes an item from the top of an array
classmates.splice(2, 1, `Ali`);//

console.log(classmates.indexOf(5));





console.log(classmates);




function assignGrade(score) {
  if (score > 90) {
    return `A`;
} else if (score > 80 && score <90) {
    return `B`;
} else if (score > 70 && score <80) {
    return `C`;
} else if (score > 60 && score <70) {
    return `D`;
} else {
    return `F`;
}
}
console.log(` You got a ` + assignGrade(95));
console.log(` You got a ` + assignGrade(68));
console.log(` You got a ` + assignGrade(22));