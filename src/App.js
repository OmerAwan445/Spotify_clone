import { useEffect } from 'react';
import './App.css';
import Login from './Components/Login'
import { getAccessTokenFromResponse } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import { useDataLayer } from './DataLayer/DataLayerProvider';
import Player from "./Components/Player";
import fetchData from './fetchData';
function App() {
  const DISCOVER_WEEKLY_PLAYLIST = "37i9dQZEVXcI8s6ltqTt2X";
  const [{token}, dispatchUser] = useDataLayer();
  const spotify = new SpotifyWebApi();
  // console.log(token);
  /* Remove that too when project is finished */
  // spotify.setAccessToken(JSON.stringify(window.localStorage.getItem("token")));

  // Temporary function to save data in local storage so that i dont have to login again
function saveToLocalStorage (name,items){
  window.localStorage.setItem(name,JSON.stringify(items))
}

  useEffect(() => {
     const hash = getAccessTokenFromResponse();
    const { access_token } = hash;
    // resetting the Url of page so that token may not be seen
    window.location.hash = '';
    if (!access_token) return;
    spotify.setAccessToken(access_token);
    saveToLocalStorage("token",access_token);
    dispatchUser({
      type: "SET_TOKEN",
      token: access_token,
    })
    spotify.getMe().then(user => {
    /* Uncomment when finished the project */
    saveToLocalStorage("user",user);
    dispatchUser({
        type: 'SET_USER',
        user: user,
      })
    });
    spotify.getUserPlaylists().then(playlist => {
      saveToLocalStorage("playlist",playlist);
      dispatchUser({
        type: 'SET_PLAYLISTS',
        playlist: playlist,
      })
    })
    /* Saving the Playlist All Info(including Tracks)  in Context */
    /* When app is logged in it will be Discover Weekly playlist
    because id here is given of discover weekly playlist */
    spotify.getPlaylist(DISCOVER_WEEKLY_PLAYLIST).then(playlist => {
      saveToLocalStorage("playlistInfo",playlist);
      dispatchUser ({
        type: 'SET_PLAYLIST_INFO',
        playlistInfo: playlist,
      })
   const currentPlayingTrackdata = fetchData("https://api.spotify.com/v1/me/player/currently-playing",token);
   if(currentPlayingTrackdata !== ''){
    const {items}=currentPlayingTrackdata;
      // const currently_playing_track ={
      //   id:
      // }
      // dispatchUser ({
      //   type: 'SET_CURRENTLY_PLAYING_TRACK',
      //   playlistInfo: playlist,
      // })
    }
    })
    },[])
// window.localStorage.clear();
return (
    <div className='app'>
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
