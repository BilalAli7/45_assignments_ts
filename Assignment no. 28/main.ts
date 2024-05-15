// Exercise 28:
// Stages of Life: Write an if-else chain that determines a person’s stage of life.

//storing age in varibale
let age = 20;
//using if-else chain
    if (age < 2) {
        console.log("baby");
    } else if (age >= 2 && age < 4) {
        console.log("toddler");
    } else if (age >= 4 && age < 13) {
        console.log("kid");
    } else if (age >= 13 && age < 20) {
        console.log("teenager");
    } else if (age >= 20 && age < 65) {
        console.log("adult");
    } else {
        console.log("elder");
    }