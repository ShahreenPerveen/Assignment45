// Function to describe a city
function describe_city(city, country) {
    if (country === void 0) { country = 'Unknown'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Calling the function for different cities
describe_city('Karachi', 'Pakistan');
describe_city('New York', 'USA');
describe_city('Paris');
