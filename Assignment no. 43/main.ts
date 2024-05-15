// Exercise :43
// Unchanged Magicians:

// defining an array of magicians
const magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// defining a function named show_magicians
function show_magicians(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

// defining a function named make_great to modify a copy of the array of magicians
function make_great(magicians: string[]): string[] {
    const modifiedMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        modifiedMagicians.push("the Great " + magicians[i]);
    }
    return modifiedMagicians;
}

// calling the make_great function with a copy of the magicians array
const greatMagicians: string[] = make_great([...magicians]); // Creating a copy of the array using spread operator

// calling the show_magicians function to show the original list
console.log("Original Magicians:");
show_magicians(magicians);

// calling the show_magicians function to show the list with "the Great" added to each magician's name
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);