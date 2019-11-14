import React from 'react';
import cls from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import FriendsList from './FriendsList/FriendsList';
import StoreContext from '../../StoreContext';

const Navbar = (props) => {
  return (
    <StoreContext.Consumer>
    {
      (store) => {
        let state = store.getState().friendsPage;
      
          return ( 
            <div>
              <nav className={cls.nav}>
                <div className={cls.item}><NavLink to="/profile" activeClassName={cls.active}>Profile</NavLink></div>
                <div className={`${cls.item} ${cls.active}`}><NavLink to="/dialogs" activeClassName={cls.active}>Messages</NavLink></div>
                <div className={cls.item}><NavLink to="/news" activeClassName={cls.active}>News</NavLink></div>
                <div className={cls.item}><NavLink to="/music" activeClassName={cls.active}>Music</NavLink></div>
                <div className={cls.item}><NavLink to="/settings" activeClassName={cls.active}>Settings</NavLink></div>
              </nav>
              <div className={cls.friendsList}>
                <FriendsList list={state.friendsList}/>
              </div>
          </div>
        )
      }
    }
  </StoreContext.Consumer>
  )
}



export default Navbar