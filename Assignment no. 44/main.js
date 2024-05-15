// Exercise :44
// Sandwiches:
//Defining the fuction
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("We have add the following items to the sandwich");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- " + item);
    }
    console.log("---------------");
}
//Calling the fuction
make_sandwich("salad", "onion");
make_sandwich("cheese", "ketchup", "Mayoneses");
make_sandwich("ham", "cheese", "lettuce");
