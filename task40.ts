interface Album {
    artist: string;
    title: string;
    tracks?: number;
  }
  
  function makeAlbumm(artist: string, title: string, tracks?: number): Album {
    const album: Album = { artist, title };
    if (tracks !== undefined) {
      album.tracks = tracks;
    }
    return album;
  }
  
  // Example usage
  const albumm1: Album = makeAlbumm("Artist1", "Album1", 12);
  const albumm2: Album = makeAlbumm("Artist2", "Album2");
  const albumm3: Album = makeAlbumm("Artist3", "Album3", 15);
  
  console.log(albumm1);
  console.log(albumm2);
  console.log(albumm3);
  