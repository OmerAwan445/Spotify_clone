import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import { useDataLayer } from '../DataLayer/DataLayerProvider';
import '../Styles/Header.css';
function Header() {
    const [{user}]=useDataLayer();

    return (
        <div className='header'>
        <div className='header__left'>
        <SearchIcon className='icon' />
        <input
          type='text'
          placeholder="Search for Artists, Songs, or Podcast" />
        </div>

    <div className='header__right'>
    <Avatar alt={user?.display_name} src={user?.images[0]?.url} />
    <strong>{user?.display_name}</strong>
   </div>
    </div>
     );
}

export default Header;