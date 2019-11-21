import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import cls from './Dialogs.module.css';
import DialogsUsers from './DialogsUsers/DialogsUsers';
import Message from './Messages/Message';
import {addMessageCreator, updateNewMessageCreator} from '../../redux/dialogs-reducer'


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map( d => <DialogsUsers key={d.id} name={d.name} id={d.id} img={d.img} />);
    let messagesElements = state.messagesData.map( mes => <Message message={mes.message} key={mes.id}/>);
    ////////////////
    

    let addMess = () => {
        props.sendMessage();
    }

    let updateMessage = (event) => {
        let message = event.target.value;
        props.updateNewMessage(message);
    }

    if (!props.isAuth) {
        return <Redirect to="/login" />
    }

    return (
        <div className={cls.dialogs}>
            <div className={cls.dialogsUsers}>
                { dialogsElements }
            </div>
            <div className={cls.messagesUsers}>
                { messagesElements }
            </div>
        
            <button onClick={ addMess }>Add Message</button>
            <textarea placeholder='Enter new message' 
                      onChange={ updateMessage }
                      value={ state.newMessageText }/>
        </div>
    )
}

export default Dialogs;