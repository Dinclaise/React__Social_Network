import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../../utilities/validators/validators';

const maxLength50 = maxLengthCreator(50); 

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLength50]}
                name={"newMessageText"} placeholder="Enter new message"/>
            </div>
            <div>
                <button>Add Message</button>
            </div>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm({form:"dialogAddMessageForm"})(AddMessageForm)
