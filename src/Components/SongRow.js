import React from 'react';
import './SongRow.css'
function SongRow({item,songNo}) {
function getaddedDaysAgoDiffFromDate(addedDate){
  const todayDate = new Date();
  const diff = (todayDate - addedDate) /1000;
  const addedHoursAgo = Math.floor(diff/(60*60))
  const addedDaysAgo =  Math.floor(diff/(24*60*60));
  return  {addedHoursAgo,addedDaysAgo};
}

const artists=item.track.artists.map(artist=>artist.name);
const songName = item.track.name;
const songThumbnail = item.track.album.images[2]?.url;
const addedDate = item.added_at;
const albumName = item.track.album.name

const {addedHoursAgo,addedDaysAgo} = getaddedDaysAgoDiffFromDate(new Date(addedDate));
return (
        <li className='body__songRow'>
        <strong>{songNo}</strong>
        <div className='songRow__detail'>
        <img
          src={songThumbnail}
          alt={songName} />
        <div className='songRow__discprition'>
        <a href= "##">{songName}</a>
        <p>{artists.join(", ")}</p>
        </div>
        </div>
        <h5>{albumName}</h5>
        <h5>  {addedDaysAgo === 1 ?
          `${addedHoursAgo} hours ago` :
          `${addedDaysAgo} days ago`}
        </h5>
        </li>

        );
    }

export default SongRow;