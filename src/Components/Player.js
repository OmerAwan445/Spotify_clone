import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Body from './Body';

import './Player.css'
import { useDataLayer } from '../DataLayer/DataLayerProvider';
function Player(props) {
  const [{user},dispatchUser] =useDataLayer();
  // temporaray function to set context from local storage to prevent login
  function setContextFromLS(){
    dispatchUser({
      type: "SET_TOKEN",
      token: JSON.parse(window.localStorage.getItem("token")),
    })
    dispatchUser({
      type: 'SET_USER',
      user: JSON.parse(window.localStorage.getItem("user")),
    })

    dispatchUser({
      type: 'SET_PLAYLISTS',
      playlist: JSON.parse(window.localStorage.getItem("playlist")),
    })
    dispatchUser ({
      type: 'SET_PLAYLIST_INFO',
      playlistInfo: JSON.parse(window.localStorage.getItem("playlistInfo")),
    })
    dispatchUser ({
      type: 'SET_PLAYLIST_TRACKS',
      playlistTracks: JSON.parse(window.localStorage.getItem("playlistTracks")),
    })

  }
useEffect(()=>{
if(!user) setContextFromLS();
})

return (
        <div className='player'>
        <div className='player__body'>
        <Sidebar  spotify={props.spotify}  />
        <Body/>
        </div>
        <Footer />
        </div>
        );
}

export default Player;