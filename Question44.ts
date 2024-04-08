function makeSandwich(...items: string[]): void {
    console.log("Making sandwich with the following items:");
    for (const item of items) {
        console.log("- " + item);
    }
    console.log("Enjoy your sandwich!");
}

// Call the function with different number of arguments
makeSandwich('ham', 'cheese', 'lettuce');
makeSandwich('turkey', 'bacon', 'avocado', 'tomato');
makeSandwich('peanut butter', 'jelly');

