function showMagicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

function makeGreat(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push("the Great " + magicians[i]);
    }
    return greatMagicians;
}

const MagicianNames: string[] = ["David Copperfield", "Penn Jillette", "Teller", "Derren Brown"];
const greatMagician: string[] = makeGreat([...MagicianNames]);

console.log("Original Magicians:");
showMagicians(magicianNames);

console.log("\nGreat Magicians:");
showMagicians(greatMagicianNames);