function makeAlbumm(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Example usage
var albumm1 = makeAlbumm("Artist1", "Album1", 12);
var albumm2 = makeAlbumm("Artist2", "Album2");
var albumm3 = makeAlbumm("Artist3", "Album3", 15);
console.log(albumm1);
console.log(albumm2);
console.log(albumm3);
