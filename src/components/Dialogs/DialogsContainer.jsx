import React from 'react';
import { NavLink } from 'react-router-dom';
import cls from './Dialogs.module.css';
import DialogsUsers from './DialogsUsers/DialogsUsers';
import Message from './Messages/Message';
import {addMessageCreator, updateNewMessageCreator} from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';


const DialogsContainer = () => {
    return (
        <StoreContext.Consumer> 
            {
            (store) => {
                let state = store.getState().dialogsPage;
    
                let addMess = () => {
                    store.dispatch(addMessageCreator());
                }

                let updateMessage = (message) => {
                    store.dispatch(updateNewMessageCreator(message));
                }

                return (
                    <Dialogs updateNewMessage={ updateMessage } 
                        sendMessage={ addMess }
                        dialogsPage={state} />
                )
            }
        }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;