import { userAPI, authAPI } from '../api/api';
import { stopSubmit } from 'redux-form';


const SET_USER_DATA = 'SET_USER_DATA';



let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch(action.type) {
        case SET_USER_DATA: {
            return {
              ...state,
              ...action.payload
            };
        }
        default: 
            return state;
    }
}



export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})

//THUNK---------  передаст значения в app-reducer
export const getAuthUserData = () => {
  return (dispatch) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
          let {id, email, login} = response.data.data;
          dispatch(setAuthUserData(id, email, login, true));
        }
    });
  }
}

export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
          dispatch(getAuthUserData());
        } else {
          let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error";
          dispatch(stopSubmit("login", {_error: message}));
        }
    });
  }
}

export const logout = () => {
  return (dispatch) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
          dispatch(setAuthUserData(null, null, null, false));
        }
    });
  }
}

export default authReducer;