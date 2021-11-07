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

function calcOrder() {
var orderForm = document.forms.orderForm;
//Calculate initial cost of the order
var mIndex = orderForm.elements.model.selectedIndex;
var mCost = orderForm.elements.model.options[mIndex].value;
var qIndex = orderForm.elements.qty.selectedIndex;
var quantity = orderForm.elements.qty[qIndex].value;
}
//Initial cost = model cost x quantity

var initialCost = mCost*quantity;
orderForm.elements.initialCost.value = formatUSCurrency(initialCost);

//Retrive the cost of the User`s protection plan
var pCost = document.querySelector(`input [name="protection"]:checked`).value * quantity;
orderForm.elements.protectionCost.value = formatNumber(pCost,2);
//Calculate the order subtotal
orderForm.elements.subtotal.value = formatNumber(initialCost + pCost,2);

//Calculate the sales tax
var salesTax  = 0.05*(initialCost + pCost);
orderForm.elements.salesTax.value = formatNumber(salesTax, 2);

//calculate the cost of the total order
var totalCost = initialCost + pCost + salesTax;
orderForm.elements.totalCost.value = formatUSCurrency(totalCost);






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