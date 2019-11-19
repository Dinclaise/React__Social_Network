import React from 'react';
import cls from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return (
    <header className={cls.header}>
      <div>
        <img src="https://i.pinimg.com/736x/33/b8/69/33b869f90619e81763dbf1fccc896d8d--lion-logo-modern-logo.jpg"/>
      </div>

      <div className={cls.loginBlock}>
        { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>
        }
        
      </div>
    </header>
  )
}

export default Header