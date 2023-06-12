import React from 'react';
import "../Styles/Footer.css";
import CurrentTrack from './CurrentTrack';
import PlaybackControls from './PlaybackControls';
import VolumeSlider from './VolumeSlider';

function Footer() {

   return (
        <div className="footer">
        <div className="footer__left">
          <CurrentTrack />
         </div>
        <div className="footer__center">
        <PlaybackControls />
        </div>
        <div className="footer__right">
        <VolumeSlider />
        </div>
      </div>
     );
}

export default Footer;