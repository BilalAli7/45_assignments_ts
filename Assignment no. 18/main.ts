//Exercise 18:
//Seeing the World:

// storing the locations in an array
const locations: string[] = ["Japan", "China", "Bangladesh", "Pakistan", "Afghanistan"];

// Printing the acual list
console.log("Original order:", locations);

// Printing the list in alphabetical order without modifying the actual list
console.log("Print of the list in Alphabetical order without mofiying", [...locations].sort());

// Showing that the list is still in its original order 
console.log("Original order (unchanged):", locations);

// Printing the list in reverse alphabetical order without modifying the actual list
console.log("Print of the list in Reverse Alphabetical order without mofiying:", [...locations].sort().reverse());

// Showing that the list is still in its original order by printing it again
console.log("Original order (unchanged):", locations);

// Reversing the order of the list
locations.reverse();
console.log("Reversed order:", locations);

// Reversing the order of the list again to return it to its original order
locations.reverse();
console.log("Original order (restored):", locations);

// Sorting the array so it’s stored in alphabetical order
locations.sort();
console.log("Sorted order:", locations);

// Sorting and reversing the array to change it to reverse alphabetical order.
locations.sort().reverse();
console.log("Reverse sorted order:", locations);