import React from "react";

function ArtistList({ artistList }) {
  return (
    <div>
      {artistList.map(function (artist) {
       return <h2>{artist.artist.artist_name}</h2>;
      })}
    </div>
  );
}

export default ArtistList;
