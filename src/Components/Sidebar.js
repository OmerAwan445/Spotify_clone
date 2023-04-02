import React from 'react';
import './Sidebar.css'
import SideBarOption from './SideBarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayer } from '../DataLayer/DataLayerProvider';

function Sidebar() {
  const [{playlist}]=useDataLayer();
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
   {playlist?.items?.map((item,index) =>
    <SideBarOption key={index} option={item.name} />
    )}
   </div>
    </div>
  );
}

export default Sidebar;