import React from 'react';
import './Footer.css'
// import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import "./Footer.css";
import { Grid, Slider } from "@mui/material";
import CurrentTrack from './CurrentTrack';
import PlaybackControls from './PlaybackControls';
// @mui/icons-material/Search
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
          <Grid container spacing={2}>
            <Grid item>
              <PlaylistPlayIcon />
            </Grid>
            <Grid item>
              <VolumeDownIcon />
            </Grid>
            <Grid item xs>
              <Slider aria-labelledby="continuous-slider" />
            </Grid>
          </Grid>
        </div>
      </div>
     );
}

export default Footer;