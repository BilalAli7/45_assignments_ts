// Exercise :37
// large Shirts:
// Defining a function with default parameters
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Size: ".concat(size, ", Message: ").concat(message));
}
// Making a large shirt with the default message
make_shirt();
// Making a medium shirt with the default message
make_shirt("Medium");
// Making a shirt of any size with a different message
make_shirt("Small", "I love Generative AI Course");
