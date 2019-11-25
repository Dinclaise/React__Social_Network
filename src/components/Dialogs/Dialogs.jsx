import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import cls from './Dialogs.module.css';
import DialogsUsers from './DialogsUsers/DialogsUsers';
import Message from './Messages/Message';
import {addMessageCreator, updateNewMessageCreator} from '../../redux/dialogs-reducer'
import {Field, reduxForm} from 'redux-form';


const Dialogs = (props) => {
    // let state = props.dialogsPage;
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

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"newMessageText"} placeholder="Enter new message"/>
            </div>
            <div>
                <button>Add Message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form:"dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;