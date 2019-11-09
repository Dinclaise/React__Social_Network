import React from 'react';
import { NavLink } from 'react-router-dom';
import cls from './Dialogs.module.css';
import DialogsUsers from './DialogsUsers/DialogsUsers';
import Message from './Messages/Message';



const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData.map( d => <DialogsUsers name={d.name} id={d.id}/>);
    let messagesElements = props.state.messagesData.map( mes => <Message message={mes.message}/>);


    return (
        <div className={cls.dialogs}>
            <div className={cls.dialogsUsers}>
                { dialogsElements }
            </div>
            <div className={cls.messagesUsers}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;