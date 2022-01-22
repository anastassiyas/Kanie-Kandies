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



// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
  
    

    // Defining error variables with a default value
    var nameErr = emailErr = mobileErr = true;

    // Validate name
    if (name == "") {
        printError("nameErr", "Please enter your Full name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate email address
    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // Validate mobile number
    if (mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid mobile number");
        } else {
            printError("mobileErr", "");
            mobileErr = false;
        }
    }

       // Prevent the form from being submitted if there are any errors
    if ((nameErr || emailErr || mobileErr) == true) {
        return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
            "Full Name: " + name + "\n" +
            "Email Address: " + email + "\n" +
            "Mobile Number: " + mobile + "\n"; 
        }
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    }



