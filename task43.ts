interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function makeAlbum(artist: string, title: string, tracks?: number): Album {
    const album: Album = {
        artist: artist,
        title: title,
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

function makeGreat(magicians: string[]): string[] {
    const greatMagicians: string[] = [];

    for (const magician of magicians) {
        greatMagicians.push(`Great ${magician}`);
    }

    return greatMagicians;
}

function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Test makeAlbum function
const album1 = makeAlbum("Artist1", "Album1", 10);
const album2 = makeAlbum("Artist2", "Album2");
const album3 = makeAlbum("Artist3", "Album3", 15);

console.log(album1);
console.log(album2);
console.log(album3);

// Test makeGreat function
const magicians = ["Magician1", "Magician2", "Magician3"];
const greatMagicians = makeGreat([...magicians]);

// Test showMagicians function
console.log("Original Magicians:");
showMagicians(magicians);

console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
