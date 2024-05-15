
// Exercise :37
// large Shirts:

// Defining a function with default parameters
function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`Size: ${size}, Message: ${message}`);
}

// Making a large shirt with the default message
make_shirt();

// Making a medium shirt with the default message
make_shirt("Medium");

// Making a shirt of any size with a different message
make_shirt("Small", "I love Generative AI Course");
