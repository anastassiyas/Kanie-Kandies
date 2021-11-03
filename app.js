//Puppy Calculator
function calculateDogAge(humanYears) {
    var humanYears=document.getElementById("solution").value;
    var dogYears = 7*humanYears;
    console.log("Your doggie is " + dogYears + " years old in dog years!");
    document.getElementById("solution1").innerHTML= "Your doggie is " + dogYears + " years old in dog years!" ;
    }
    
    calculateDogAge(1);
    calculateDogAge(2);
    calculateDogAge(5);