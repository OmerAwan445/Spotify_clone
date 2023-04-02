import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Body from './Body';

import './Player.css'
import { useDataLayer } from '../DataLayer/DataLayerProvider';
function Player(props) {
  const [{user},dispatchUser] =useDataLayer();
//  console.log(user);
  // temporaray function to set context from local storage to prevent login
  function setContextFromLS(){
    dispatchUser({
      type: 'SET_USER',
      user: JSON.parse(window.localStorage.getItem("user")),
    })

    dispatchUser({
      type: 'SET_PLAYLIST',
      playlist: JSON.parse(window.localStorage.getItem("playlist")),
    })
    dispatchUser ({
        type: 'SET_DISCOVER_WEEKLY',
        discover_weekly: JSON.parse(window.localStorage.getItem("discover_weekly")),
      })
  }
useEffect(()=>{
if(!user) setContextFromLS();
})

return (
        <div className='player'>
        <div className='player__body'>
        <Sidebar />
        <Body />
        </div>
        <Footer />
        </div>
        );
}

export default Player;