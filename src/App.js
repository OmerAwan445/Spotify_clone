import React from 'react';
import { useEffect } from 'react';
import './App.css';
import Login from './Components/Login'
import { getAccessTokenFromResponse } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import { useDataLayer } from './DataLayer/DataLayerProvider';
import Player from "./Components/Player";
import fetchCurrentTrack from './Components/fetchCurrentTrack';
function App() {
  const DISCOVER_WEEKLY_PLAYLIST = "37i9dQZEVXcI8s6ltqTt2X";
  const [{token,currentTrack}, dispatchUser] = useDataLayer();
  const spotify = new SpotifyWebApi();
  // console.log(token);
  // console.log(currentTrack);

  useEffect(() => {
     const hash = getAccessTokenFromResponse();
    let { access_token } = hash;
    // resetting the Url of page so that token may not be seen
    window.location.hash = '';
    /* Remove this when project is finished */
    access_token='BQB7ukwQ448kBcvoSPriO2M6jl4swjDiX5q0EZHK99bNzRYRnJlC4DsUyr1Th9FnPRTy68YGDGcT2IzAqDIvm_HklaVUJTdZVlqHMZMXYTzK2p0oKR8SitMWp1Xylq0NZ1HNFQAhfO2C-h71JLukqHPVcEF3cM5Z3Y3V4-U1ywtW3LEyEM8IstlEtYrTx6Sd6Abc121Z4JspD-ZiaNm-Kw'
    if (!access_token) return;
    console.log("App");
    spotify.setAccessToken(access_token);
    dispatchUser({
      type: "SET_TOKEN",
      token: access_token,
    })
    spotify.getMe().then(user => {
    /* Uncomment when finished the project */
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
      .then(currentTrackData =>{
        dispatchUser ({
          type: 'SET_CURRENTLY_PLAYING_TRACK',
          currentTrack: currentTrackData,
        })
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

export default App;
