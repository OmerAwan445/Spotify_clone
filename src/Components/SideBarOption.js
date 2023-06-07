import React from 'react';
import '../Styles/SideBarOption.css'
function SideBarOption({Icon,option,id,handlerShowPlaylistItems}) {
    return (
        /* home,search and library has Icon so they will not have any onclick handler */
    <div onClick={Icon ? ()=>{} :()=>handlerShowPlaylistItems(id) } className = "sidebar_option">
    {Icon && <Icon className='icon'/>}
    {Icon ? <h4>{option}</h4> : <p>{option}</p>}
    </div>
    );
}

export default SideBarOption;