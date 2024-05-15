
// Exercise :44
// Sandwiches:

//Defining the fuction
function make_sandwich(...items:string[]) {
    console.log("We have add the following items to the sandwich")
    for (let item of items) {
        console.log("- " + item)
    }
    console.log("---------------")
}

//Calling the fuction
make_sandwich("salad","onion")
make_sandwich("cheese","ketchup","Mayoneses")
make_sandwich("ham","cheese","lettuce")
