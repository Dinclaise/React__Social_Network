import React from 'react';
import cls from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';



const ProfileInfo = ({profile, status, updateStatus}) => {
    if(!profile) {
      return <Preloader />
    }

  return (
    <div>
      {/* <div>
        <img src="https://mirpozitiva.ru/uploads/posts/2016-08/medium/1472042903_31.jpg" alt='image' />
      </div> */}
      <div className={cls.blockProfile}>
        <div className={cls.imageBlock}>
          <img src={profile.photos.large}/>
        </div>
        <div className={cls.aboutUser}>
          {/* Status: <span>{props.profile.aboutMe}</span> */}
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo