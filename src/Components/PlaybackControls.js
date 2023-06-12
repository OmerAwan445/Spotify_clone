import React,{Fragment} from 'react';
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import { useDataLayer } from '../DataLayer/DataLayerProvider';
import fetchCurrentTrack from '../fetchCurrentTrack';
import '../Styles/PlaybackControls.css'

function PlaybackControls() {
  const [{token,is_playing,currentTrack},dispatchUser] = useDataLayer();
  const API_ENDPOINT = process.env.REACT_APP_PLAYER_API_ENDPOINT

  function handlerNextPreviousTrack(type) {
    try {
    fetch(`${API_ENDPOINT}/${type}`, {
    method: "POST",
    body: JSON.stringify(""),
    headers: {
    Authorization: `Bearer ${token}`,
    },
    }).then(async()=>{
      // Fetch current track data
      const data = await fetchCurrentTrack(`${API_ENDPOINT}/currently-playing`, token);
      if(!data) throw new Error("No current track");
      const {currentTrackData}=data;
      if (currentTrackData) {
        dispatchUser  ({
          type: 'SET_CURRENTLY_PLAYING_TRACK',
          currentTrack: currentTrackData,
        });
        dispatchUser  ({
          type: 'SET_ISPLAYING',
          is_playing:true,
        });
      }
    });
    }
    catch (error) {
      console.error(error);
}
}


 async function handlerToggleResumeStart(type){
    try {
      await fetch(`${API_ENDPOINT}/${type}`, {
        method: "PUT",
        body: JSON.stringify({
          "uris": [`spotify:track:${currentTrack.id}`],
          }),
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
      });
    }
    catch(error){
      console.error(error);
    }
    dispatchUser  ({
      type: 'SET_ISPLAYING',
      is_playing: !is_playing,
    });

  }

    return (
      <Fragment>
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon
        onClick={()=>{handlerNextPreviousTrack("previous")}}
        className="footer__icon" />
        { is_playing ?
        <PauseCircleIcon
        onClick={()=>{handlerToggleResumeStart("pause")}}
        fontSize="large"
        className="footer__icon" /> :
        <PlayCircleOutlineIcon
        onClick={()=>{handlerToggleResumeStart("play")}}
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