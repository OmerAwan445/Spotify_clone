import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Body from './body';
function Player(props) {
    return (
        <div className='player__body'>
        <Sidebar />
        <Body />
        <Footer />
        {/*

        */}
        </div>
     );
}

export default Player;