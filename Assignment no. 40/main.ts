// Exercise :40
// Album:

function make_album(artist: string, title: string, num_tracks?: number) {
    return {
        artist: artist,
        title: title,
        num_tracks: num_tracks
    }
}

let album1 = make_album("Pink Floyd", "Dark Side of the Moon", 17);
console.log(album1);

let album2 = make_album("Pink Floyd", "The Wall");
console.log(album2);

let album3 = make_album("Pink Floyd", "The Wall", 17);
console.log(album3);