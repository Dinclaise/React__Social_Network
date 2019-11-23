import React from 'react';
import cls from './Dialogs.module.css';
import DialogsUsers from './DialogsUsers/DialogsUsers';
import Message from './Messages/Message';
import {addMessageCreator, updateNewMessageCreator} from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessage: (message) => {
            dispatch(updateNewMessageCreator(message))
        },
        sendMessage: () => {
            dispatch(addMessageCreator())
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);