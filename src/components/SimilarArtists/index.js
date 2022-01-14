import React from 'react'

function SimilarArtists({ similarArtistsArray }) {
  return (
    <div>
      {similarArtistsArray.map(function (artist) {
        return <p key={artist.artist.artist_id}>{artist.artist.artist_name}</p>;
      })}
    </div>
  );
}

export default SimilarArtists
