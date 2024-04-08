var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function showMagicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function makeGreat(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push("the Great " + magicians[i]);
    }
    return greatMagicians;
}
var MagicianNames = ["David Copperfield", "Penn Jillette", "Teller", "Derren Brown"];
var greatMagician = makeGreat(__spreadArray([], MagicianNames, true));
console.log("Original Magicians:");
showMagicians(magicianNames);
console.log("\nGreat Magicians:");
showMagicians(greatMagicianNames);
