import React from 'react';
import cls from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import FriendsListContainer from './FriendsList/FriendsListContainer';

const Navbar = (props) => {
  return (
            <div>
              <nav className={cls.nav}>
                <div className={cls.item}><NavLink to="/profile" activeClassName={cls.active}>Profile</NavLink></div>
                <div className={`${cls.item} ${cls.active}`}><NavLink to="/dialogs" activeClassName={cls.active}>Messages</NavLink></div>
                <div className={`${cls.item} ${cls.active}`}><NavLink to="/users" activeClassName={cls.active}>Find Users</NavLink></div>
                <div className={cls.item}><NavLink to="/news" activeClassName={cls.active}>News</NavLink></div>
                <div className={cls.item}><NavLink to="/music" activeClassName={cls.active}>Music</NavLink></div>
                <div className={cls.item}><NavLink to="/settings" activeClassName={cls.active}>Settings</NavLink></div>
              </nav>
              <div className={cls.friendsList}>
                <FriendsListContainer />
              </div>
          </div>
        )
}
 



export default Navbar