// Exercise :35
// Animals: 
// Storing  the names of animals in an array
var animals = ["Sheep", "Cat", "Cow", "Turtle", "Parrot"];
// Looping through the array to print the name of each animal
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
// Modifying the loop to print a statement about each animal
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    console.log("A ".concat(animal.toLowerCase(), " would make a great pet."));
}
// printing a statement oytside loop
console.log("\nAny of these animals would make a great pet!");
