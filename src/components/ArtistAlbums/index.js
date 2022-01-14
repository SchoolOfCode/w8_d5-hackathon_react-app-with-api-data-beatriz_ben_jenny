import React from "react";
import { apikey, baseUrl } from "../App";

function ArtistAlbums({albumsArray}) {
  return <div>
    {albumsArray.map(function (album) {
      return (
        <p key={album.album.album_id}>{album.album.album_name}</p>
  )
})}

  </div>;
}

export default ArtistAlbums;

// get the artist id from the search artist results
// add that id into a url at will ge the matching albums for the artist
// display the albums

// let artistAlbumUrl = `artist.albums.get?artist_id=${artistId}&s_release_date=desc&g_album_name=1`;
// let url = baseUrl + artistAlbumUrl + apikey;


