import React from 'react'
import './SideBarOptions.css'

function SideBarOptions({title, Icon}) {
    return (
        <div className="sidebarOptions">
                <Icon/>
                <h1 className="sidebarOptions__title">{title}</h1>
        </div>
    )
}

export default SideBarOptions
