import React,{Fragment} from 'react';
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import { useDataLayer } from '../DataLayer/DataLayerProvider';
import fetchCurrentTrack from './fetchCurrentTrack';
import './PlaybackControls.css'

function PlaybackControls() {

  const [{token,playing},dispatchUser] = useDataLayer();

  async function handlerNextPreviousTrack(type) {
    const url = `https://api.spotify.com/v1/me/player/${type}`;

    try {
      await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Fetch current track data
      const data = await fetchCurrentTrack("https://api.spotify.com/v1/me/player/currently-playing", token);
      if(!data) return;
      const {currentTrackData , is_playing}=data;
      if (currentTrackData) {
              dispatchUser  ({
              type: 'SET_CURRENTLY_PLAYING_TRACK',
              currentTrack: currentTrackData,
            });
              dispatchUser  ({
              type: 'SET_ISPLAYING',
              is_playing: is_playing,
            });
          }
        }
      // }
    catch (error) {
      console.error(error);
}
}


  function handlerToggleResumeStart(){
    dispatchUser  ({
      type: 'SET_ISPLAYING',
      is_playing: !playing,
    });

  }

    return (
      <Fragment>
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon
        onClick={()=>{handlerNextPreviousTrack("previous")}}
        className="footer__icon" />
        { playing ?
        <PauseCircleIcon
        onClick={()=>{handlerToggleResumeStart()}}
        fontSize="large"
        className="footer__icon" /> :
        <PlayCircleOutlineIcon
        onClick={()=>{handlerToggleResumeStart()}}
        fontSize="large"
        className="footer__icon" />
      }
      <SkipNextIcon
      onClick={()=>{handlerNextPreviousTrack("next")}}
        className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </Fragment>
      );
}

export default PlaybackControls;