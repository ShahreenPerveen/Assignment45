let car = 'Sabaru';
//Test 1: Is car equal to 'subaru'?
console.log("Test 1: Is car equal to 'subaru'? Prediction: True.");
console.log(car === 'subaru');

// Test 2: Is car not equal to 'toyota'?
console.log("Test 2: Is car not equal to 'toyota'? Prediction: True.");
console.log(car !== 'toyota');

// Test 3: Does car contain the substring 'sub'?
console.log("Test 3: Does car contain the substring 'sub'? Prediction: True.");
console.log(car.includes('sub'));

// Test 4: Is car length greater than 5?
console.log("Test 4: Is car length greater than 5? Prediction: False.");
console.log(car.length > 5);

// Test 5: Is car length less than or equal to 7?
console.log("Test 5: Is car length less than or equal to 7? Prediction: True.");
console.log(car.length <= 7);

// Test 6: Is car equal to 'Subaru' ignoring case?
console.log("Test 6: Is car equal to 'Subaru' ignoring case? Prediction: False.");
console.log(car.toUpperCase() === 'SUBARU');

// Test 7: Is car starts with 'su'?
console.log("Test 7: Does car start with 'su'? Prediction: True.");
console.log(car.startsWith('su'));

// Test 8: Is car ends with 'ru'?
console.log("Test 8: Does car end with 'ru'? Prediction: True.");
console.log(car.endsWith('ru'));

// Test 9: Is car numeric?
console.log("Test 9: Is car numeric? Prediction: False.");
console.log(!isNaN(Number(car)));

// Test 10: Is car not undefined?
console.log("Test 10: Is car not undefined? Prediction: True.");
console.log(car !== undefined);



