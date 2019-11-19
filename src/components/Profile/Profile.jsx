import React from 'react';
import cls from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} statusUserProfile={props.statusUserProfile}/>
      <MyPostsContainer />
    </div>
  )
}

export default Profile