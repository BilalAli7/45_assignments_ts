//Exercise 38:
// Cities:

// Defining a function called describe_city with default parameter for country
function describe_city(city: string, country: string = "Pakistan"): void {
    console.log(`${city} is in ${country}.`);
}

// Calling the function for three different cities
describe_city("Karachi");
describe_city("Islamabad");
describe_city("London", "England");