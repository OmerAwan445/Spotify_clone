import React from 'react';
import './Footer.css'
// import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import "./Footer.css";
import { Grid, Slider } from "@mui/material";
// @mui/icons-material/Search
function Footer() {
    return (
        <div className="footer">
        <div className="footer__left">
          <img
            className="footer__albumLogo"
            src="https://i.pinimg.com/736x/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg?b=t"
            alt={"sdasda"}
          />
          <div className='footer__songInfo'>
          <h4>Hip Hop</h4>
          <p>Disco Music</p>
          </div>
         </div>

        <div className="footer__center">
          <ShuffleIcon className="footer__green" />
          <SkipPreviousIcon className="footer__icon" />
          <PlayCircleOutlineIcon
            fontSize="large"
            className="footer__icon" />
          <SkipNextIcon className = "footer__icon" />
          <RepeatIcon className="footer__green" />
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