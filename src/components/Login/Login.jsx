import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utilities/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';
import { login } from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import cls from './../common/FormsControls/FormsControls.module.css';

const LoginForm = ({handleSubmit, error}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <Field placeholder={"Email"} name={"email"} component={Input}
                            validate={[required]} />
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} component={Input}
                            validate={[required]} type={"password"}/>
                </div>
                <div>
                    <Field type={"checkbox"} name={"rememberMe"} component={Input} /> Remember Me
                </div>
                { error && <div className={cls.formSummaryError}>
                    {error}
                </div>
                }
                <div>
                    <button>Sign In</button>
                </div>
            </form>
        </div>
    )
}


const LoginReduxForm = reduxForm({form: "login"})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <div>
                <h1>LOGIN</h1>
            </div>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);