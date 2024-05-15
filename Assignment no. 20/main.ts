// Exercise 20:
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

// Defining Array of countries
let list: string[] = [ "Pakistan" ,"Afghanistan", "Urdu", "Brazil", "Mount Everest", "India", "Japan", "Picasso Tower", "Indus", "Karchi"];
//method 1:(using for loop)
for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
}
console.log("\n");

//method 2: (Using forof loop)
for (let element of list) {
    console.log(element);
}
console.log("\n");

//method 3:(using forEach loop)
list.forEach(element => {
    console.log(element);
});
console.log("\n");

//method 4:(using map)
list.map(element => {
    console.log(element);
})
console.log("\n");

//method 5:(using filter)
list.filter(element => {
    console.log(element);
})
console.log("\n");