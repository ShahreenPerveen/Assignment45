function showMagiciansNames(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

const magicianNames: string[] = ["David Copperfield", "Penn Jillette", "Teller", "Derren Brown"];

showMagiciansNames(magicianNames);

