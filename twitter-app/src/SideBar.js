import React from 'react'
import './SideBar.css'
import SideBarOptions from './SideBarOptions';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import TwitterIcon from '@material-ui/icons/Twitter';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ListAltIcon from '@material-ui/icons/ListAlt';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function SideBar() {
    return (
        <div className="sidebar">
          <SideBarOptions Icon={TwitterIcon} />
          <SideBarOptions Icon={HomeIcon} title="Home"/>
          <SideBarOptions Icon={SearchIcon } title="Explore"/>
          <SideBarOptions Icon={NotificationsNoneIcon} title="Notifications"/>
          <SideBarOptions Icon={MailOutlineIcon} title="Messages"/>
          <SideBarOptions Icon={BookmarkBorderIcon} title="Bookmarks"/>
          <SideBarOptions Icon={ListAltIcon } title="Lists"/>
          <SideBarOptions Icon={PersonOutlineIcon } title="Profile"/>
          <SideBarOptions Icon={MoreHorizIcon} title="More"/>
          
        </div>
    )
}

export default SideBar
