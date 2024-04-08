function showGreatMagiciansNames(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

function makeGreatmagiciansNames(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push("the Great " + magicians[i]);
    }
    return greatMagicians;
}

const greatMagicians: string[] = ["David Copperfield", "Penn Jillette", "Teller", "Derren Brown"];
const greatMagicianNames: string[] = makeGreat([...MagicianNames]);

console.log("Original Magicians:");
showMagicians(MagicianNames);

console.log("\nGreat Magicians:");
showMagicians(greatMagicianNames)