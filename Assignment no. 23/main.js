"use strict";
//Exercise 23:
//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test.
let car = 'subaru';
// Test 1: Is car equal to 'subaru'?
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True
// Test 2: Is car not equal to 'toyota'?
console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota'); // True
// Test 3: Is car equal to 'Subaru' (case sensitive)?
console.log("Is car == 'Subaru'? I predict False.");
console.log(car == 'Subaru'); // False
// Test 4: Is car not equal to undefined?
console.log("Is car != undefined? I predict True.");
console.log(car != undefined); // True
// Test 5: Is car less than 'toyota'?
console.log("Is car < 'toyota'? I predict False.");
console.log(car < 'toyota'); // False
// Test 6: Is car greater than 'ford'?
console.log("Is car > 'ford'? I predict True.");
console.log(car > 'ford'); // True
// Test 7: Is car length equal to 6?
console.log("Is car.length == 6? I predict True.");
console.log(car.length == 6); // True
// Test 8: Is car length not equal to 7?
console.log("Is car.length != 7? I predict True.");
console.log(car.length != 7); // True
// Test 9: Is car starting with 'su'?
console.log("Is car.startsWith('su')? I predict True.");
console.log(car.startsWith('su')); // True
// Test 10: Is car ending with 'ru'?
console.log("Is car.endsWith('ru')? I predict True.");
console.log(car.endsWith('ru')); // True
