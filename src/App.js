import { useEffect } from 'react';
import './App.css';
import Login from './Components/Login'
import { getAccessTokenFromResponse } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import { useDataLayer } from './DataLayer/DataLayerProvider';
import Player from "./Components/Player";
function App() {
  const DISCOVER_WEEKLY_PLAYLIST = "37i9dQZEVXcI8s6ltqTt2X";
  const [{token,playlistTracks,playlistInfo}, dispatchUser] = useDataLayer();
  const spotify = new SpotifyWebApi();

console.log(token);
console.log(playlistInfo,playlistTracks)

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
    dispatchUser({
      type: "SET_TOKEN",
      token: access_token,
    })
    spotify.setAccessToken(access_token);
    spotify.getMe().then(user => {
      saveToLocalStorage("user",user);
    /* Uncomment when finished the project */
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
    /* Saving the playlist Info(img,name) and playlist Tracks in Context */
    spotify.getPlaylist(DISCOVER_WEEKLY_PLAYLIST).then(playlist => {
      saveToLocalStorage("playlistInfo",playlist);
      saveToLocalStorage("playlistTracks",playlist.tracks.items);
      dispatchUser ({
        type: 'SET_PLAYLIST_INFO',
        playlistInfo: playlist,
      })
      dispatchUser ({
        type: 'SET_PLAYLIST_TRACKS',
        playlistTracks: playlist.tracks.items,
      })
    })
  }, [])
// window.localStorage.clear();

return (
    <div className='app'>
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
