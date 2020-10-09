import React from 'react'
import './SideBar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import ChannelCard from './ChannelCard';
function SideBar() {
    return (
        <div className="sidebar">
          <div className="sidebar__top">
              <h2>Coding Channell</h2>
                <ExpandMoreIcon />
            </div>

           <div className="sidebar__channels">
               <div className="sidebar__channelsTop">
                    <div className="sidebar__channelsTopText">
                        <ExpandMoreIcon />
                        <h1>Channels</h1>
                    </div>
                    <AddIcon/>
               </div>

               <div className="sidebar__channelsList">
                    <ChannelCard id="" channel=""/>
                    <ChannelCard id="" channel=""/>
                    <ChannelCard id="" channel=""/>
             </div>
            </div>
        </div>
    )
}

export default SideBar
