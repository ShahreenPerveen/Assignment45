var guests = ["Madni", "Masood", "Shoaib"];
console.log("You are inviting ".concat(guests.length, " people to dinner."));
console.log("Great news! We found a bigger dinner table!");
guests.unshift("Waqas");
guests.splice(Math.floor(guests.length / 2), 0, "Qasim");
guests.push("Arman");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are invited to dinner at my place."));
});
