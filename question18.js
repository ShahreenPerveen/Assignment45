var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Karachi", "Peshawar", "Lahore", "Quetta", "Islamabad"];
console.log("Original order:", places.join(", "));
console.log("Alphabetical order:", __spreadArray([], places, true).sort().join(", "));
console.log("Original order:", places.join(", "));
console.log("Reverse alphabetical order:", __spreadArray([], places, true).sort().reverse().join(", "));
console.log("Original order:", places.join(", "));
places.reverse();
console.log("Reversed order:", places.join(", "));
places.reverse();
console.log("Back to original order:", places.join(", "));
places.sort();
console.log("Sorted in alphabetical order:", places.join(", "));
places.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in reverse alphabetical order:", places.join(", "));
