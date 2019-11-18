import React from 'react';
import cls from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';



const ProfileInfo = (props) => {
    if(!props.profile) {
      return <Preloader />
    }

  return (
    <div>
      <div>
        <img src="https://mirpozitiva.ru/uploads/posts/2016-08/medium/1472042903_31.jpg" alt='image' />
      </div>
      <div className={cls.descriptionBlock}>
        <img src={props.profile.photos.large}/>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo