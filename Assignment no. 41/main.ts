
// Exercise 41:
//Magicians:

//defining an array of magicians
const magicians = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

//defining a function named show_magicians
function show_magicians(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

//calling the function
show_magicians(magicians);
