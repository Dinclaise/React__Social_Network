import React from 'react';
import cls from './FriendsList.module.css';
import {NavLink} from 'react-router-dom';
import Friends from './Friends/Friends';

const FriendsList = (props) => {
  let friendsElement = props.list.map( fl => <Friends name={fl.name} lastName={fl.lastName}
    id={fl.id} img={fl.img}/>);
  
    return ( 
      <div className={cls.myFriendsList}>
        <div className={cls.title}>
          My Friends
        </div>
          <div>
            { friendsElement }
          </div>
      </div>
  )
}

export default FriendsList