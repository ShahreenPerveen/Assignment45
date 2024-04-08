function showMagicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function makeGreat(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
var MagicianNames = ["David Copperfield", "Penn Jillette", "Teller", "Derren Brown"];
makeGreat(magicianNames);
showMagicians(magicianNames);
