import React from 'react';
import './SideBarOption.css'
function SideBarOption({Icon,option,id,handlerShowPlaylistItems}) {
    return (
    <div onClick={()=>handlerShowPlaylistItems(id)} className = "sidebar_option">
    {Icon && <Icon className='icon'/>}
    {Icon ? <h4>{option}</h4> : <p>{option}</p>}
    </div>
    );
}

export default SideBarOption;