var rover = {
make: "Tata Motors",
model: "Land Rover Range Rover Sport",
year: "2020",
available: true,
description:" The mid-range P400e plug-in hybrid",
price: "$71,000"
}
function display1() {
    var place = document.getElementById("submit1");
    for (value in rover) {
        place.innerHTML="Make:" + rover.make + '<br>' +
        "Model: " + rover.model + '<br>' +
        "Year: " + rover.year + '<br>' +
        "Available: " + rover.available + '<br>' +
        "About: " + rover.description + '<br>' +
        "Price: " + rover.price;
    }
        };
        function clear1() {
            var place = document.getElementById("submit1");
            place.innerHTML = "See Details";
           
        };
    
        
    var porsche = {
        make: "Volkswagen Group",
        model: "Porsche Cayenne",
        year: "2021",
        available:true,
        description:"include an impressive pair of plug-in hybrids",
        price: "$89,000"
        }
            
        function display2() {
        var place = document.getElementById("submit2");              
        for (value in porsche) {
        place.innerHTML="Make:" + porsche.make + '<br>' +
        "Model:" + porsche.model + '<br>' +
        "Year:" + porsche.year + '<br>' +
        "Available" + porsche.available + '<br>' +
        "About" + porsche.description + '<br>' +
        "price" + porsche.price;
        } 
        };
        function clear2() {
            var place = document.getElementById("submit2");
            place.innerHTML = "See Details";
           
        };
        var mercedes = {
            make: "Daimler AG",
            model: "Mercedes-Benz GLE 450",
            year: "2021",
            available:true,
            description:"The GLE 350de diesel plug-in hybrid",
            price: "$92,000"
            }
                    
            function display3() {
            var place = document.getElementById("submit3");
            for (value in mercedes) {
            place.innerHTML="Make:" + mercedes.make + '<br>' +
            "Model:" + mercedes.model + '<br>' +
            "Year:" + mercedes.year + '<br>' +
            "Available" + mercedes.available + '<br>' +
            "About" + mercedes.description  + '<br>' +
            "price" + mercedes.price;
            }  
            };
                
            
            
            
            

    
        function clear3() {
        var place = document.getElementById("submit3");
        place.innerHTML = "See Details";
       
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

