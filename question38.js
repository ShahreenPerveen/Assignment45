// Function to format city and country
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Calling the function with different city-country pairs
var city1 = city_country('Lahore', 'Pakistan');
var city2 = city_country('Tokyo', 'Japan');
var city3 = city_country('Paris', 'France');
// Printing the returned values
console.log(city1);
console.log(city2);
console.log(city3);
