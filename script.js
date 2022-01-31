var sandwich = {
    bread: "sourdough",
    protein: "london broil",
    cheese: "lacey swiss cheese",
    toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
};

// console.log(sandwich);

function sandwichFactory(bread, protein, cheese, toppings) {
    var sandwich = {};
    sandwich.bread = bread;
    sandwich.protein = protein;
    sandwich.cheese = cheese;
    sandwich.toppings = toppings;
    return sandwich;
}

var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
// console.log(s1);

// My pizza
var pizza = {
    crustType: ["thin", "deep dish", "hand tossed"],
    sauceType: ["tomato", "traditional", "marinara"],
    cheeses: ["mozzarella", "parmesan", "provolone", "feta"],
    toppings: ["pepperoni", "sausage", "mushrooms", "onions", "green peppers", "extra cheese", "olives"]
};

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("deep dish", "marinara", "feta", ["olives", "onions"]);
console.log(p1);




