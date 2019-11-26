import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import cls from './Dialogs.module.css';
import DialogsUsers from './DialogsUsers/DialogsUsers';
import Message from './Messages/Message';
import {addMessageCreator, updateNewMessageCreator} from '../../redux/dialogs-reducer'
import {Field, reduxForm} from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utilities/validators/validators';
import { AddMessageFormRedux } from './AddNewMessageForm/AddNewMessageForm';


const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.map( d => <DialogsUsers  name={d.name} id={d.id} img={d.img} />);
    let messagesElements = props.messagesData.map( mes => <Message message={mes.message} />);
    let newMessageText = props.newMessageText;
    ////////////////


    let addNewMessage = (value) => {
        props.sendMessage(value.newMessageText);
    }
    // if (!props.isAuth) {
    //     return <Redirect to="/login" />
    // }
    
    const onSubmit = (formData) => {
            console.log(formData);
    }

    return (
        <div className={cls.dialogs}>
            <div className={cls.dialogsUsers}>
                { dialogsElements }
            </div>
            <div className={cls.messagesUsers}>
                { messagesElements }
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}



export default Dialogs;