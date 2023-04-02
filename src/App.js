import { useEffect } from 'react';
import './App.css';
import Login from './Components/Login'
import { getAccessTokenFromResponse } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import { useDataLayer } from './DataLayer/DataLayerProvider';
import Player from "./Components/Player";
function App() {
  const DISCOVER_WEEKLY_PLAYLIST = "37i9dQZEVXcI8s6ltqTt2X";
  const [{token,discover_weekly }, dispatchUser] = useDataLayer();
  const spotify = new SpotifyWebApi();

// Temporary function to save data in local storage so that i dont have to login again
function saveToLocalStorage (name,user){
  window.localStorage.setItem(name,JSON.stringify(user))
}
  useEffect(() => {
     const hash = getAccessTokenFromResponse();
    const { access_token } = hash;
    // resetting the Url of page so that token may not be seen
    window.location.hash = '';
    if (!access_token) return;
    dispatchUser({
      type: "SET_TOKEN",
      token: access_token
    })
    spotify.setAccessToken(access_token);
    spotify.getMe().then(user => {
      saveToLocalStorage("user",user);
    /* Uncomment when finished the project */
    // dispatchUser({
    //     type: 'SET_USER',
    //     user: user,
    //   })
    });
    spotify.getUserPlaylists().then(playlist => {
      saveToLocalStorage("playlist",playlist);
      // dispatchUser({
      //   type: 'SET_PLAYLIST',
      //   playlist: playlist,
      // })
    })
    spotify.getPlaylist(DISCOVER_WEEKLY_PLAYLIST).then(playlist => {
      saveToLocalStorage("discover_weekly",playlist);
      // dispatchUser ({
      //   type: 'SET_DISCOVER_WEEKLY',
      //   discover_weekly: playlist,
      // })
    })
  }, [])


return (
    <div className='app'>
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
