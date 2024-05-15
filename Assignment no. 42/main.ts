// Exercise :42
// Great Magicians:

// defining an array of magicians
const magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// defining a function named show_magicians
function show_magicians(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

// defining a function named make_great to modify the array of magicians
function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}

// calling the make_great function to modify the magicians array
make_great(magicians);

// calling the show_magicians function to see the modified list
show_magicians(magicians);