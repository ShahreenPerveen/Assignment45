let places: string[] = ["Karachi", "Peshawar", "Lahore", "Quetta", "Islamabad"];
console.log("Original order:", places.join(", "));
console.log("Alphabetical order:", [...places].sort().join(", "));
console.log("Original order:", places.join(", "));
console.log("Reverse alphabetical order:", [...places].sort().reverse().join(", "));
console.log("Original order:", places.join(", "));
places.reverse();
console.log("Reversed order:", places.join(", "));
places.reverse();
console.log("Back to original order:", places.join(", "));
places.sort();
console.log("Sorted in alphabetical order:", places.join(", "));
places.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", places.join(", "));
