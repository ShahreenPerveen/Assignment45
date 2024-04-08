// Function to create an album object
function make_album(artist: string, title: string, tracks?: number): { artist: string; title: string; tracks?: number } {
    const album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        
    }
    return album;
}

// Creating album dictionaries
const album1 = make_album('Taylor Swift', '1989');
const album2 = make_album('Ed Sheeran', 'Divide', 16);
const album3 = make_album('Beyoncé', 'Lemonade');

// Printing each album object
console.log(album1);
console.log(album2);
console.log(album3);