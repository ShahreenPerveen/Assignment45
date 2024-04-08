//Array of favorite pizza names
const favoritePizzas: string[] = ['Pepperoni', 'Margherita', 'BBQ Chicken'];

// Printing pizza names using a for loop
console.log("Pizza Names:");
for (const pizza of favoritePizzas) {
    console.log(pizza);
}

// Printing sentences about liking each pizza
console.log("\nStatements about liking pizza:");
for (const pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}

// Additional sentence about loving pizza
console.log("\nI really love pizza!");