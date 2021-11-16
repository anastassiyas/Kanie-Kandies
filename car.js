var img=document.createElement("img");

image.src= image.jpg;
var src =document.getElementById("x");

src.appendChild(img); 
var rover = {
make: "Tata Motors",
model: "Land Rover Range Rover Sport",
year: "2020",
available: true,
description:" The mid-range P400e plug-in hybrid",
price: "$71,000"
}

function dispay() {
var place=document.getElementById("submit");
for (value in rover) {
place.innerHTML="Make:" + rover.make + '<br>' +
"Model:" + rover.model + '<br>' +
"Year:" + rover.year + '<br>' +
"Available" + rover.available + '<br>' +
"About" + rover.description + '<br>' +
"Price" + rover.price;
}  
};

var porsche = {
make: "Volkswagen Group",
model: "Porsche Cayenne",
year: "2021",
available:true,
description:"include an impressive pair of plug-in hybrids",
price: "$89,000"
}
    
function dispay2() {
var place=document.getElementById("submit");
for (value in porsche) {
place.innerHTML="Make:" + porsche.make + '<br>' +
"Model:" + porsche.model + '<br>' +
"Year:" + porsche.year + '<br>' +
"Available" + porsche.available + '<br>' +
"About" + porsche.description + '<br>' +
"price" + porsche.price;
}  
};

var mercedes = {
make: "Daimler AG",
model: "Mercedes-Benz GLE 450",
year: "2021",
available:true,
description:"The GLE 350de diesel plug-in hybrid",
price: "$92,000"
}
        
function dispay3() {
var place=document.getElementById("submit");
for (value in mercedes) {
place.innerHTML="Make:" + mercedes.make + '<br>' +
"Model:" + mercedes.model + '<br>' +
"Year:" + mercedes.year + '<br>' +
"Available" + mercedes.available + '<br>' +
"About" + mercedes.description  + '<br>' +
"price" + mercedes.price;
}  
};









 tommyBird= new Object();

tommyBird.age=38;

tommyBird.color= "white";

tommyBird.likes= ["food", "sun"];

tommyBird.birthday= {"month": 7, "day": 17, year: 1983}

;

function describeBird(bird) {

console.log("This bird is " + bird.age + " years old with " +
bird.color + " feathers.");

}

describeBird(tommyBird );

// The constructor
function Book(title, author,numPages) {
// The properties of this object
this.title = title;
this.author = author;
this.numPages = numPages;
this.currentPage = 0;
}

//A method of the object
Book.prototype.read=function () {
document.write("Title" + this.title + "Author" + this.title + "numpages" + this.numPages + "0" + this.currentPage)
}

var book1 = new Book("It", "Stephen King", 394, 2)
book1.read()