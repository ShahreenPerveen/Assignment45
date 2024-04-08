var car = 'Sabaru';
//Test 1: Is car equal to 'subaru'?
console.log("Test 1: Is car equal to 'subaru'? Prediction: True.");
console.log(car === 'subaru');
// Test 2: Is car not equal to 'toyota'?
console.log("\nTest 2: Is car not equal to 'toyota'? Prediction: True.");
console.log(car !== 'toyota');
// Test 3: Does car contain the substring 'sub'?
console.log("\nTest 3: Does car contain the substring 'sub'? Prediction: True.");
console.log(car.includes('sub'));
// Test 4: Is car length greater than 5?
console.log("\nTest 4: Is car length greater than 5? Prediction: False.");
console.log(car.length > 5);
// Test 5: Is car length less than or equal to 7?
console.log("\nTest 5: Is car length less than or equal to 7? Prediction: True.");
console.log(car.length <= 7);
// Test 6: Is car equal to 'Subaru' ignoring case?
console.log("\nTest 6: Is car equal to 'Subaru' ignoring case? Prediction: False.");
console.log(car.toUpperCase() === 'SUBARU');
// Test 7: Is car starts with 'su'?
console.log("\nTest 7: Does car start with 'su'? Prediction: True.");
console.log(car.startsWith('su'));
// Test 8: Is car ends with 'ru'?
console.log("\nTest 8: Does car end with 'ru'? Prediction: True.");
console.log(car.endsWith('ru'));
// Test 9: Is car numeric?
console.log("\nTest 9: Is car numeric? Prediction: False.");
console.log(!isNaN(Number(car)));
// Test 10: Is car not undefined?
console.log("\nTest 10: Is car not undefined? Prediction: True.");
console.log(car !== undefined);
