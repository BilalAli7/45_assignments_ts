"use strict";
//Exercise 30: 
//Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
const usernames = ["admin", "ALi", "Umer", "Bilal", "Kamal"];
for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] === "admin") {
        console.log(`Hello ${usernames[i]}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
    }
}
//using for each for the same problem
usernames.forEach((username) => {
    if (username === "admin") {
        console.log(`Hello ${username}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});
//using for of
for (const username of usernames) {
    if (username === "admin") {
        console.log(`Hello ${username}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
