"use strict";
//Erxercise 24:
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result.
// Tests for equality and inequality with strings
let my_city = "Karachi";
console.log("Is Karchi is my city? I predict True.");
console.log("Karachi" == my_city);
console.log("Is Islamabad is my city? I predict False.");
console.log("Islamabad" == my_city);
// Tests using the lower case function
let my_name = "Ali";
console.log("Is ali is my name in lowercase? I predict True.");
console.log(my_name.toLowerCase() == "ali");
console.log("Is Ali is my name in lowercase? I predict False.");
console.log(my_name.toLowerCase() == "Ali");
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("is Six greater than two? I predict True.");
console.log(6 > 2);
console.log("is Six lesser than two? I predict False.");
console.log(6 < 2);
console.log("is Six less than or equal to seven? I predict True.");
console.log(6 <= 7);
console.log("is six greater than or equal to nine? I predict False.");
console.log(6 >= 9);
console.log("is True and False is True? i predict False.");
console.log(true && false);
console.log("is True or False is True? i predict True.");
console.log(true || false);
// Test whether an item is in a array
let fruits = ["Apple", "Mango", "Orange", "Banana"];
console.log("Is Apple in fruits? I predict True.");
console.log(fruits.includes("Apple"));
console.log("Is Potato in fruits? I predict False.");
console.log(fruits.includes("Potato"));
