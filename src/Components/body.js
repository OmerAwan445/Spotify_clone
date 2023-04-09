import React,{useEffect} from 'react';
import './Body.css'
import Header from './Header';
import { useDataLayer } from '../DataLayer/DataLayerProvider';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './SongRow'

function Body() {
  const [{token}, dispatchUser] = useDataLayer();
  // console.log(token);
  useEffect(()=>{
//   async function fetchData(url){
//     const result = await fetch(url, {
//       method: "POST",
//       headers: { Authorization: `Bearer ${token}` },
//     });
// const data=await result;
// console.log(data);
// return data;
// }
// fetchData("https://api.spotify.com/v1/me/player/next");
  },[])
  // Track id is "15JINEqzVMv3SvJTAXAKED"
  const [{playlistInfo}] = useDataLayer();
   return (
      <div className='_body'>
      <div className='discover__weekly'>
      <Header />
      <div className='body__info'>
      <img src={playlistInfo?.images[0]?.url} alt=""/>
      <div className='body__infoText'>
      <strong>PLAYLIST</strong>
      <h1>{playlistInfo?.name}</h1>
      <p>{playlistInfo?.description}</p>
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
      {playlistInfo?.tracks?.items?.map((item,index) =>
        <SongRow songNo={index+1} key={item.track.id} item={item}/>
        )}
        </ol>

        <div className='body__end'>
        </div>
       </div>
      </div>
      </div>
      );
}

export default React.memo(Body);