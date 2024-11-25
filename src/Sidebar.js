import React from 'react';
import {useLocation} from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const location = useLocation();
  const username = location.state?.username || 'Guest';
    return (
        <div className='Sidebar'>
            <img className ='Pict'src='https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg'/>
            <h2 className='Profile'>{username}</h2>
        </div>
    );
}

export default Sidebar;