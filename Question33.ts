// Array of numbers 1 through 9
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array
for (const num of numbers) {
    // Determine the ordinal ending based on the number
    let ordinalEnding: string;
    if (num === 1) {
        ordinalEnding = 'st';
    } else if (num === 2) {
        ordinalEnding = 'nd';
    } else if (num === 3) {
        ordinalEnding = 'rd';
    } else {
        ordinalEnding = 'th';
    }

    // Print the result
    console.log(`${num}${ordinalEnding}`);
}
