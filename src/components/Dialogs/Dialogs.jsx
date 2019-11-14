import React from 'react';
import { NavLink } from 'react-router-dom';
import cls from './Dialogs.module.css';
import DialogsUsers from './DialogsUsers/DialogsUsers';
import Message from './Messages/Message';
import {addMessageCreator, updateNewMessageCreator} from '../../redux/dialogs-reducer'


const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogsData.map( d => <DialogsUsers name={d.name} id={d.id} img={d.img} />);
    let messagesElements = state.messagesData.map( mes => <Message message={mes.message} />);
    ////////////////
    

    let addMess = () => {
        props.store.dispatch(addMessageCreator());
    }

    let updateMessage = (event) => {
        
        let message = event.target.value;
        props.store.dispatch(updateNewMessageCreator(message));
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