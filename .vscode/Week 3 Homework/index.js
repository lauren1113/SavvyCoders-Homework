//Part One: Array of pizzaToppings
let pizzaToppings = [
  "pepperoni",
  "sausage",
  "green peppers",
  "mushrooms",
  "olives"
];

//Part Two: greetCustomer function
function greetCustomer() {
  let welcome = "Welcome to Pizza Please! Our toppings are ";
  for (let topping of pizzaToppings) {
    welcome += ${topping}, ;
  }
  console.log(welcome);
}

greetCustomer();

//Part Three: Customer Order
let size = ["small", "medium", "large"];

let crust = ["thick crust", "thin crust"];

function getPizzaOrder() {
  sizeOrder = size[2],
  crustOrder = crust[0],
  toppingOrder = pizzaToppings;
  console.log(sizeOrder);
  console.log(crustOrder);
  console.log(toppingOrder);
  return "One " + sizeOrder + " " + crustOrder + " pizza with " + toppingOrder + " coming up!";
}
getPizzaOrder();

//Part 2, Correct Solution:
function getPizzaOrder(size, crust, ...toppings) {
  let order = `One ${size} ${crust} crust pizza with `;
  for (let topping of toppings) {
    order += ${topping}, ;
    

//Part Four: Prepare Pizza function
function preparePizza() {
    prepareSize = sizeOrder,
    prepareCrust = crustOrder,
    prepareToppings = toppingOrder;
  let pizzaOrder = prepareSize + " " + prepareCrust + " " + prepareToppings;
    console.log(sizeOrder);
    console.log(crustOrder);
    console.log(toppingOrder);
    return "...Cooking pizza... " + pizzaOrder;
}
preparePizza();

//Part Five: Serve Pizza function
function servePizza() {
  const pizza = (size[2], crust[0], pizzaToppings);
  console.log(pizza);
  return "Order up! Enjoy your pizza with " + pizza;
}
servePizza();

//Part 6: Call each function and (starting with preparePizza) use the returned value from the previous function as its input

function callPreparePizza() {
  console.log(getPizzaOrder());
  return "Our chef is preparing " + getPizzaOrder();
}
callPreparePizza();

function callServePizza() {
    console.log(preparePizza());
    return "Order up! Enjoy your pizza with " + preparePizza();
}
callServePizza();
