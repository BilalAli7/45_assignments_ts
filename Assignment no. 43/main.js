// Exercise :43
// Unchanged Magicians:
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// defining an array of magicians
var magicians = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// defining a function named show_magicians
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
// defining a function named make_great to modify a copy of the array of magicians
function make_great(magicians) {
    var modifiedMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        modifiedMagicians.push("the Great " + magicians[i]);
    }
    return modifiedMagicians;
}
// calling the make_great function with a copy of the magicians array
var greatMagicians = make_great(__spreadArray([], magicians, true)); // Creating a copy of the array using spread operator
// calling the show_magicians function to show the original list
console.log("Original Magicians:");
show_magicians(magicians);
// calling the show_magicians function to show the list with "the Great" added to each magician's name
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
