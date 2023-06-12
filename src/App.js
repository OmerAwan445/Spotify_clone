import React from 'react';
import { useEffect } from 'react';
import './App.css';
import Login from './Components/Login'
import { getAccessTokenFromResponse } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import { useDataLayer } from './DataLayer/DataLayerProvider';
import Player from "./Components/Player";
import fetchCurrentTrack from './fetchCurrentTrack';

const spotify = new SpotifyWebApi();
function App() {
  // It is my discover weekly playlist any playlist id can be added
  const DISCOVER_WEEKLY_PLAYLIST = "37i9dQZEVXcI8s6ltqTt2X";
  const [{token}, dispatchUser] = useDataLayer();
  useEffect(() => {
    const hash = getAccessTokenFromResponse();
    let { access_token } = hash;
    // resetting the Url of page so that token may not be seen
    window.location.hash = '';
    // /* Remove this when project is finished */
    if (!access_token) return;
    spotify.setAccessToken(access_token);
    dispatchUser({
      type: "SET_TOKEN",
      token: access_token,
    })
    spotify.getMe().then(user => {
    dispatchUser({
        type: 'SET_USER',
        user: user,
      })
    });
    spotify.getUserPlaylists().then(playlist => {
      dispatchUser({
        type: 'SET_PLAYLISTS',
        playlist: playlist,
      })
      fetchCurrentTrack("https://api.spotify.com/v1/me/player/currently-playing",access_token)
      .then((data) =>{
        if(!data) return;
        // data is returning the currentTrackdata and is_playing Property
        const {currentTrackData,is_playing} = data;
        dispatchUser ({
          type: 'SET_CURRENTLY_PLAYING_TRACK',
          currentTrack: currentTrackData,
        })
        dispatchUser  ({
          type: 'SET_ISPLAYING',
          is_playing: is_playing,
        });
      })
    })
    /* Saving the Playlist All Info(including Tracks)  in Context */
    /* When app is logged in it will be Discover Weekly playlist
    because id here is given of discover weekly playlist */
    spotify.getPlaylist(DISCOVER_WEEKLY_PLAYLIST).then(playlist => {
      dispatchUser ({
        type: 'SET_PLAYLIST_INFO',
        playlistInfo: playlist,
      })
    })
    },[])
return (
    <div className='app'>
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App
