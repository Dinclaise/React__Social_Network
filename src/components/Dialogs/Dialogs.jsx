import React from 'react';
import {NavLink} from 'react-router-dom';
import cls from './Dialogs.module.css';



const DialogsUsers = (props) => {

    let path = `/dialogs/${props.id}`;

    return (
        <div className={`${cls.user} ${cls.active}`}>
                    <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


const Message = (props) => {
    return (
        <div className={cls.message}>{props.message}</div>
    )
}



const Dialogs = (props) => {
    return (
        <div className={cls.dialogs}>
            <div className={cls.dialogsUsers}>
                <DialogsUsers name='Dmitriy' id='1'/>
                <DialogsUsers name='Andrew' id='2'/>
                <DialogsUsers name='Sasha' id='3'/>
                <DialogsUsers name='Kate' id='4'/>
                <DialogsUsers name='Nastya' id='5'/>
            </div>
            <div className={cls.messagesUsers}>
                <Message message='Hi!'/>
                <Message message='How are u feeling?'/>
                <Message message='It was cool!'/>
            </div>
        </div>
    )
}

export default Dialogs;