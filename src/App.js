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
  console.log(token);
  const spotify = new SpotifyWebApi();
  useEffect(() => {
     const hash = getAccessTokenFromResponse();
    let { access_token } = hash;
    // resetting the Url of page so that token may not be seen
    window.location.hash = '';
    /* Remove this when project is finished */
    access_token='BQB7t-ik_oY0I3RCJGWzuz71hCPbhu7nJpgZ8bA8gVCro8i08BHN3YDRPinemGK6adDBG90uySc0I_zr-73c67ezOUV-Ss7IOV8FuNr3oq8WtMAd8F7_Jcl_4iuruYbKWPdV9YaRDUKijW0u1nkjTiBYrcxfdxZDkphweUCWQ1-wcZJEM062pgUCUixqgaGcSZSKDkn_Mwsvl7826I-lAg'
    if (!access_token) return;
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
    })
    /* Saving the Playlist All Info(including Tracks)  in Context */
    /* When app is logged in it will be Discover Weekly playlist
    because id here is given of discover weekly playlist */
    spotify.getPlaylist(DISCOVER_WEEKLY_PLAYLIST).then(playlist => {
      dispatchUser ({
        type: 'SET_PLAYLIST_INFO',
        playlistInfo: playlist,
      })
   const currentPlayingTrackdata = fetchData("https://api.spotify.com/v1/me/player/currently-playing",access_token);
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
return (
    <div className='app'>
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
