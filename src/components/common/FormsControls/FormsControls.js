import React from "react";
import cls from './FormsControls.module.css';


const FormControl = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={`${cls.formControl} ${(hasError ? cls.error : "")}`}>
                <div>
                    {props.children} 
                </div>
                { hasError && <span>{error}</span> }
        </div>
    )
}

export const Textarea = (props) => {
    const {input, child, meta, ...restProps} = props;
    return (
        <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
    )
}

export const Input = (props) => {
    const {input, child, meta, ...restProps} = props;
    return (
        <FormControl {...props}><input {...input} {...restProps} /></FormControl>
    )
}


// export const CreateField = () => {
//     <Field placeholder={"Email"} name={"email"} component={Input}
//                             validate={[required]} />
// }