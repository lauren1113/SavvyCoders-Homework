let pizzaPlace = "Pizza Please";
let numberOfToppings = 11;

console.log(typeof pizzaPlace, pizzaPlace);
console.log(typeof numberOfToppings, numberOfToppings);

console.log("Welcome to " + pizzaPlace + "! We have " + numberOfToppings + " different toppings for you to choose from, and the first one's on us!")

if (numberOfToppings < 10) {
    console.log("Quality, not quantity");
} else {
        console.log("A whole lot of pizza");
    };


for(i=1; i<=numberOfToppings; i++){
    if(i % 2 == 0){
    console. log(i);
    }
    }