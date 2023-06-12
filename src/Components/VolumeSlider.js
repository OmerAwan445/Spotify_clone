import {React,useState} from 'react';
import { Grid, Slider } from "@mui/material";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import { useDataLayer } from '../DataLayer/DataLayerProvider';

const VolumeSlider = () => {
  const API_ENDPOINT = process.env.REACT_APP_PLAYER_API_ENDPOINT

    const defaultVolume=50;
    const [volume,setVolume] = useState(defaultVolume);
    const [{token,currentTrack}] = useDataLayer();

  function sliderHandler(e){
     const changedVolume = e.target.value;
     if(!currentTrack) return;
     if( Math.abs( changedVolume - volume ) < 5 ) return // if entered volume is less than or greater than previous volume
    setVolume(() => e.target.value)
    const url =`${API_ENDPOINT}/volume?volume_percent=${changedVolume}`
   fetch(url, {method: "PUT",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    },})
  }

 return (
    <Grid container spacing={2}>
    <Grid item>
          <PlaylistPlayIcon />
            </Grid>
            <Grid item>
            <VolumeDownIcon />
            </Grid>
            <Grid item xs>
            <Slider aria-labelledby="continuous-slider" value={volume} onChange={sliderHandler} />
            </Grid>
    </Grid>
 )
}

export default VolumeSlider;