//Exerxise :33
//Pizzas:
//storing different types of pizza in an array
var pizzas = ["Italian", "Peperoni", "Hawaiian", "Tandori ", "Spicy", "Veggie"];
//printing names of pizzas
for (var _i = 0, pizzas_1 = pizzas; _i < pizzas_1.length; _i++) {
    var pizza = pizzas_1[_i];
    console.log(pizza);
}
//modifying for loop and printing message with pizza names
for (var i = 0; i < pizzas.length; i++) {
    console.log("I like ".concat(pizzas[i], " pizza."));
}
//printing message
console.log("\nI really love pizza!");
