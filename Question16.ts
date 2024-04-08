let guestss: string[] =["Samrah", "Sobia","Nadia"];
console.log("Great news! We found a bigger dinner table!");
guests.unshift("Quurat-ul-ain");
guests.splice(Math.floor(guests.length / 2), 0, "Mahrukh");
guests.push("Sawera");
guests.forEach(guests => {
    console.log(`Dear ${guests}, you are invited to dinner at my place.`);
});
