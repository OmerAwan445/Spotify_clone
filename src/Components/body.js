import React, { useEffect } from 'react';
import './Body.css'
import Header from './Header';
import { useDataLayer } from '../DataLayer/DataLayerProvider';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './SongRow'

function Body() {
  const [{token,discover_weekly}] = useDataLayer();

  /* An Asyn function is made which will fetch the data from any url which will be given to it */
  useEffect(()=>{
    async function fetchProfile(url){
      const result = await fetch(url, {
        method: "GET", headers: { Authorization: `Bearer ${token}` }
    });
  const data=await result.json();
  console.log(data);
  return data;
  }

  fetchProfile("https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb");

})
  return (
      <div className='_body'>
      <div className='discover__weekly'>
      <Header />
      <div className='body__info'>
      <img src={discover_weekly?.images[0]?.url} alt=""/>
      <div className='body__infoText'>
      <strong>PLAYLIST</strong>
      <h1>Discover Weekly</h1>
      <p>{discover_weekly?.description}</p>
      </div>
      </div>
      </div>

      {/* Lower part from Discover Weekly */}

    <div className='body__song'>
      <div className='body__icons'>
      <PlayCircleFilledIcon className='body__shuffle' />
      <FavoriteIcon fontSize='large' />
      <MoreHorizIcon />
      </div>

      <div className='song__list__section'>
      <div className='song__list__header'>
      <strong>#</strong>
      <span>Title</span>
      <span>Album</span>
      <span>Date Added</span>
      </div>

      <ol className='body__songRow__container'>
      {discover_weekly?.tracks?.items.map((item,index) =>
        <SongRow songNo={index+1} key={item.track.id} item={item}/>
        )}
        </ol>

        <div className='body__end'>
        </div>
       </div>
      </div>
      {/* discover_weekly?.tracks?.items?.map.track.name */}
      {/* discover_weekly?.tracks?.items?.track.artists.map.name */}
      </div>
      );
}

export default Body;