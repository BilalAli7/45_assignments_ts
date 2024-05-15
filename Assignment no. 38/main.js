//Exercise 38:
// Cities:
// Defining a function called describe_city with default parameter for country
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Calling the function for three different cities
describe_city("Karachi");
describe_city("Islamabad");
describe_city("London", "England");
