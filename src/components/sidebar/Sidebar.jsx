import React from 'react';
import './sidebar.css';
import {Bookmarks,Event, School, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, WorkOutline} from '@material-ui/icons';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="siderList">
            <li className="sidbarListItem">
            <RssFeed className='sidebarIcon' />
            <div className="sidebarListItemText">Feed </div>
            </li>
            <li className="sidbarListItem">
            <PlayCircleFilledOutlined className='sidebarIcon' />
            <div className="sidebarListItemText">Videos </div>
            </li>
            <li className="sidbarListItem">
            <Group className='sidebarIcon' />
            <div className="sidebarListItemText">Groups </div>
            </li>
            <li className="sidbarListItem">
            <Bookmarks className='sidebarIcon' />
            <div className="sidebarListItemText">Bookmarks </div>
            </li>
            <li className="sidbarListItem">
            <HelpOutline className='sidebarIcon' />
            <div className="sidebarListItemText">Questions </div>
            </li>
            <li className="sidbarListItem">
            <WorkOutline className='sidebarIcon' />
            <div className="sidebarListItemText">Jobs </div>
            </li>
            <li className="sidbarListItem">
            <Event className='sidebarIcon' />
            <div className="sidebarListItemText">Events </div>
            </li>
            <li className="sidbarListItem">
            <School className='sidebarIcon' />
            <div className="sidebarListItemText">Courses </div>
            </li>
         
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
