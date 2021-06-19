import React from 'react';
import './sidebarOption.css'
import {Link} from 'react-router-dom'

function SideOption({title,Icon,id}) {
    return(
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption__icon"></Icon>}
            {Icon?<h4>{title}</h4>:
            <Link to={`/${id}`} >{title}</Link>
            }
        </div>
    )
    
}
export default SideOption