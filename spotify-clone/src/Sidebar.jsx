import React from 'react';
import './sidebar.css'
import SideOption from './SideOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import {useDateLayerValue } from './DataLayer';

function Sidebar() {
    const [{playlists},dispatch] = useDateLayerValue();

    return (
        <div className="sidebar">
            <img 
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
            alt="" 
            className="sidebar__logo"/>
            <SideOption title="Home" Icon={HomeIcon}/>
            <SideOption title="Search" Icon={SearchIcon}/>
            <SideOption title="Your Library" Icon={LibraryMusicIcon}/>
            
            <br />
            <strong className='sidebar__title'>PLAYLISTS</strong>
            <hr/>


            {playlists?.items?.map(playlist=>(
            <SideOption title={playlist.name} key={playlist.id} id={playlist.id}></SideOption>
            ))}
        </div>
    )
}
export default Sidebar