import React from 'react';
import cls from './Friends.module.css';
import {NavLink} from 'react-router-dom';



const Friends = (props) => {
    return ( 
      <div className={cls.card}>
        <div className={cls.imgTitle}>
          <img src={props.img} alt="Picture"/>
        </div>
        <div>
          <span className={cls.fullName}>{props.name} {props.lastName}</span>
        </div>
      </div>
  )
}

export default Friends