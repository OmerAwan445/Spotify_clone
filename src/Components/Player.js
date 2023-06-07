import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Body from './Body';
import '../Styles/Player.css'
function Player(props) {
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