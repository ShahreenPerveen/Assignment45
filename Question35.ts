// Array of animals with a common characteristic
const animals: string[] = ['Dog', 'Cat', 'Rabbit'];

// Printing animal names using a for loop
console.log("Animal Names:");
for (const animal of animals) {
    console.log(animal);
}

// Printing statements about each animal
console.log("\nStatements about animals:");
for (const animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Additional sentence about the common characteristic
console.log("\nAny of these animals would make a great pet!");

