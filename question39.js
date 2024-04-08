// Function to create an album object
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
    }
    return album;
}
// Creating album dictionaries
var album1 = make_album('Taylor Swift', '1989');
var album2 = make_album('Ed Sheeran', 'Divide', 16);
var album3 = make_album('Beyoncé', 'Lemonade');
// Printing each album object
console.log(album1);
console.log(album2);
console.log(album3);
