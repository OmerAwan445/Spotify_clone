import React from 'react';
import './SongRow.css'
function SongRow({item,songNo}) {
function getDaysDiffFromDate(addedDate){
  const todayDate = new Date();
  const diff = (todayDate - addedDate) /1000;
  const hours = Math.floor(diff/(60*60))
  const days =  Math.floor(diff/(24*60*60));
  return  hours;
}

const artists=item.track.artists.map(artist=>artist.name);
const songName = item.track.name;
const songThumbnail = item.track.album.images[0]?.url;
const addedDate = item.added_at;
const albumName = item.track.album.name

const addedDaysAgo = getDaysDiffFromDate(new Date(addedDate));

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
        <h5>{addedDaysAgo === 0 ? `Today` : `${addedDaysAgo} days ago`}</h5>
        </li>

        );
    }

export default SongRow;