// Array of numbers 1 through 9
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var num = numbers_1[_i];
    // Determine the ordinal ending based on the number
    var ordinalEnding = void 0;
    if (num === 1) {
        ordinalEnding = 'st';
    }
    else if (num === 2) {
        ordinalEnding = 'nd';
    }
    else if (num === 3) {
        ordinalEnding = 'rd';
    }
    else {
        ordinalEnding = 'th';
    }
    // Print the result
    console.log("".concat(num).concat(ordinalEnding));
}
