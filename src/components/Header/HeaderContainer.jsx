import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import {connect} from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reducer';
import { authAPI } from '../../api/api';
import { logout } from './../../redux/auth-reducer';

class HeaderContainer extends React.Component {
  

  render() {
      return (
        <Header {...this.props} />
      )
  }
}

let mapToStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}

export default connect(mapToStateToProps, {logout}) (HeaderContainer)