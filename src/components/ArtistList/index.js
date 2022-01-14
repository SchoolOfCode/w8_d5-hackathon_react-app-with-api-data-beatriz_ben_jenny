import React, { useState } from "react";

function ArtistList({ artistList, getArtistAlbums, getSimilarArtists }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <div>
      {artistList.map(function (artist) {
        return (
          <div>
            <h2
              className="get-more-link"
              onClick={() => {
                setReadMore(!readMore);
              }}
              key={artist.artist.artist_id}
            >
              {artist.artist.artist_name}
            </h2>
            <button onClick={() => getArtistAlbums(artist.artist.artist_id)}>
              See Artist's Albums
            </button>
            <button onClick={() => getSimilarArtists(artist.artist.artist_id)}>
              See Similar Arists
            </button>
          </div>
        );

      })}
   </div>
  );
}

export default ArtistList;

// function App() {
//   const [readMore,setReadMore]=useState(false);
//   const extraContent=<div>
//       <p className="extra-content">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur neque ab
//         porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero
//         commodi officia aliquam! Maxime.
//       </p>
//   </div>
//   const linkName=readMore?'Read Less << ':'Read More >> '
//   return (
//     <div className="App">
//       <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
//       {readMore && extraContent}
//     </div>
//   );
// }

// export default App;
