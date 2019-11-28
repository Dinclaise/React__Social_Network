import React from 'react';
import cls from './Users.module.css'
import boyPhoto from './../../assets/images/boy.png'
import {NavLink} from 'react-router-dom';
import * as axios from 'axios';
import { userAPI } from '../../api/api';
import Paginator from '../common/Paginator/Paginator';


let UserChoice = ({user, followingInProgress, follow, unfollow}) => {
    // let user = user;
    return (
        <div>
            <div className={cls.userCard}>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small !=null ? user.photos.small : boyPhoto} className={cls.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    
                    {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id) } 
                            onClick ={ () => { unfollow(user.id); }}>
                        Unfollow</button> 

                    : <button disabled={followingInProgress.some(id => id === user.id) } 
                            onClick ={ () => { follow(user.id); }}>
                        Follow</button> }
                </div>
            </div>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                    </span>
                </span>
        </div>
    )
    
}

export default UserChoice;