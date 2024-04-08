// Function to describe a city
function describe_city(city: string, country: string = 'Unknown'): void {
    console.log(`${city} is in ${country}.`);
}

// Calling the function for different cities
describe_city('Karachi', 'Pakistan');
describe_city('New York', 'USA');
describe_city('Paris');
