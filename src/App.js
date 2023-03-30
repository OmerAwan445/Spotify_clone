import { useEffect } from 'react';
import './App.css';
import Login from './Components/Login'
import { getAccessTokenFromResponse } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import { useDataLayer } from './DataLayer/DataLayerProvider';
import Player from "./Components/Player";
function App() {
const [{token},dispatchUser] = useDataLayer();
const spotify=new SpotifyWebApi();

useEffect(()=>{
    const hash=getAccessTokenFromResponse();
    const {access_token} = hash;
    // resetting the Url of page so that token may not be seen
    window.location.hash='';
    if(!access_token) return;
    dispatchUser({
      type:"SET_TOKEN",
      token:access_token
    })
   spotify.setAccessToken(access_token);
    spotify.getMe().then(user =>{
      dispatchUser({
        type: 'SET_USER',
        user:user ,
      })
    });
  },[])

console.log("asdadsad");
  return (
       <div className='app'>
   {token ? <Player spotify={spotify}/>: <Login />}
    </div>
  );
}

export default App;
