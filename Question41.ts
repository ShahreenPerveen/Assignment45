function showmagicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

function makeGreatmagicians(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}

const magiciannames: string[] = ["David Copperfield", "Penn Jillette", "Teller", "Derren Brown"];

makeGreat(magicianNames);
showmagicians(magicianNames);