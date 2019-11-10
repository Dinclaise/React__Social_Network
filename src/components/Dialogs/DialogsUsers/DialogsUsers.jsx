import React from 'react';
import {NavLink} from 'react-router-dom';
import cls from './../Dialogs.module.css';



const DialogsUsers = (props) => {
    let path = `/dialogs/${props.id}`;

    return (
        <div className={cls.friendsDialogs}>
            <div className={cls.imgTitle}>
                <img src={props.img} alt="Picture"/>
            </div>
            <div className={`${cls.user} ${cls.active}`}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>  
        </div>
        
    )
}



export default DialogsUsers;