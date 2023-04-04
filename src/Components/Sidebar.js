import React from 'react';
import './Sidebar.css'
import SideBarOption from './SideBarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayer } from '../DataLayer/DataLayerProvider';

function Sidebar() {
  const [{token,playlist},dispatchUser]=useDataLayer();

  // when clicked grab the id and make a call on tracks along id and
  // handover the items to context and when context is chnaged the body is updated.
 async function handlerShowPlaylistItems (id){
    // Making a call with id and returing the data
async function fetchProfile(url){
  const result = await fetch(url, {
    method: "GET", headers: { Authorization: `Bearer ${token}` }
});
const data=await result.json();
// console.log(data,id);
return data;
}
 const playlist= await fetchProfile(`https://api.spotify.com/v1/playlists/${id}/tracks`);
  if(!playlist)return;
  console.log(playlist);
  dispatchUser ({
    type: 'SET_PLAYLIST_INFO',
    playlist_info: playlist,
  })

}
  // console.log(playlist);
  return (
    <div className='sidebar'>
    <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
    <SideBarOption Icon={HomeIcon} option={"Home"} />
    <SideBarOption Icon={SearchIcon} option={"Serach"} />
    <SideBarOption Icon={LibraryMusicIcon} option={"Library"} />
    <br/>
    <strong>Playlist</strong>
    <hr/>
   <div className='playlist'>
   {/* Displaying the playlist names on Side bar and apply clickHandler */}
   {playlist?.items?.map((item) =>
    <SideBarOption
      key={item.id}
      id={item.id}
      option={item.name}
      handlerShowPlaylistItems={handlerShowPlaylistItems}
      />
    )}
   </div>
    </div>
  );
}

export default Sidebar;