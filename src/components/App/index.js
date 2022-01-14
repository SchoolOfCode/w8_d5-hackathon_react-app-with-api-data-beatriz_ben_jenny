import React, { useState, useEffect } from "react";
import "./App.css";
import SearchByArtist from "../SearchByArtist";
import ArtistList from "../ArtistList";
// import axios from 'axios';

//need to move this to .env file
export const apikey = `&apikey=e0923e77c715a76152a0d46a1ecfd84b`;

// let apikey = `&apikey={process.env.REACT_APP_API_KEY}`;

export const baseUrl = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/`;
// let baseUrl = `https://api.musixmatch.com/ws/1.1/`;

// let baseUrl = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/artist.search?q_artist=prodigy&apikey=${apikey}`;

function App() {
  const [artistInput, setArtistInput] = useState("");
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [artistList, setArtistList] = useState([]);
  const [artistAlbumsClicked, setArtistAlbumsClicked] = useState(false);
  const [similarArtistsClicked, setSimilarArtistsClicked] = useState(false);
  const [artistId, setArtistId] = useState(0)
  const [albumsArray, setAlbumsArray] = useState([]);
  const [similarArtistsArray, setSimilarArtistsArray] = useState([]);

  function handleInput(text) {
    setArtistInput(text);
  }

  function handleClick() {
    setIsButtonClicked(!isButtonClicked);
  }

  useEffect(() => {
    console.log(artistInput);
    async function fetchData() {
      let artistSearchUrl = `artist.search?q_artist=${artistInput}`;
      let url = baseUrl + artistSearchUrl + apikey;
      console.log(url);
      let response = await fetch(url);
      let data = await response.json();
      console.log(data.message.body.artist_list);
      setArtistList(data.message.body.artist_list);
      setArtistInput("");
    }
    if (artistInput) {
      fetchData();
    }
    //const artistId = data.message.body.artist.artist_id;
  }, [isButtonClicked]);

  function getArtistAlbums(id) {
    setArtistAlbumsClicked(!artistAlbumsClicked)
    setArtistId(id)
  }
  
useEffect(() => {
  console.log(artistId);
  async function fetchData() {
    let albumSearchUrl = `artist.albums.get?artist_id=${artistId}&s_release_date=desc&g_album_name=1`;
    let url = baseUrl + albumSearchUrl + apikey;
    console.log(url);
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    // setArtistList(data.message.body.artist_list);
  }
  if (artistId) {
    fetchData();
  }

}, [artistAlbumsClicked]);

  function getSimilarArtists(id) {
    setSimilarArtistsClicked(!similarArtistsClicked)
    setArtistId(id)
  }

  useEffect(() => {
    console.log(artistId);
    async function fetchData() {
      let artistSearchUrl = `artist.related.get?artist_id=${artistId}&page_size=5&page=1`;
      let url = baseUrl + artistSearchUrl + apikey;
      console.log(url);
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);
      // setArtistList(data.message.body.artist_list);
    }
    if (artistId) {
      fetchData();
    }
  }, [similarArtistsClicked]);

  //        useEffect(() => {
  //          axios
  //     .get(
  //       `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/artist.search?q_artist=${artistInput}${apikey}`
  //     )
  //     .then(res => {
  //       dispatch({
  //         type: "SEARCH_TRACKS",
  //         payload: res.data
  //           // .message.body.track_list
  //       });

  //       // this.setState({ trackTitle: "" });

  //       // toast.success("Here are your results...");
  //     })
  //     .catch(err => console.log(err));
  // },
  //        [isButtonClicked]);

  return (
    <div className="App">
      <h1>Search for your favourite artist!</h1>
      <SearchByArtist
        handleInput={handleInput}
        artistInput={artistInput}
        handleClick={handleClick}
      />
      <ArtistList
        artistList={artistList}
        getArtistAlbums={getArtistAlbums}
        getSimilarArtists={getSimilarArtists}
      />
    </div>
  );
}

export default App;
