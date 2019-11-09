import React from 'react';
import cls from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts post={props.state.postData}/>
    </div>
  )
}

export default Profile