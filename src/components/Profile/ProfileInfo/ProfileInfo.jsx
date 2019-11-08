import React from 'react';
import cls from './ProfileInfo.module.css';



const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://mirpozitiva.ru/uploads/posts/2016-08/medium/1472042903_31.jpg" alt='image' />
      </div>
      <div className={cls.descriptionBlock}>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo