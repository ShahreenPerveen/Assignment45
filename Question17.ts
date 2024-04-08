let Guests: string[] =["Usama", "Shagufta","Urooj","Ayesha", "Maryam"];
console.log("Due to limited spaces, we can invite only two guests to dinner");

while (guests.length > 2) {
    const removedGuest = guests.pop();
    console.log(`sorry ,${removedGuest}, you are no longer invitedto dinner`);
}