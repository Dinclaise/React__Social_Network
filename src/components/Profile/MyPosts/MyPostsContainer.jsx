import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts';
import {connect} from 'react-redux';



let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
    posts: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostActionCreator: (text) => {
      let action = updateNewPostActionCreator(text);
      dispatch(action);
    },

    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer