// Exercise :40
// Album:
function make_album(artist, title, num_tracks) {
    return {
        artist: artist,
        title: title,
        num_tracks: num_tracks
    };
}
var album1 = make_album("Pink Floyd", "Dark Side of the Moon", 17);
console.log(album1);
var album2 = make_album("Pink Floyd", "The Wall");
console.log(album2);
var album3 = make_album("Pink Floyd", "The Wall", 17);
console.log(album3);
