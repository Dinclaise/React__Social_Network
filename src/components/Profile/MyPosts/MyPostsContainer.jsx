import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';




const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer> 
      { 
      (store) => {
        let state = store.getState();

        let addPost = () => {
          store.dispatch(addPostActionCreator());
        }
      
        let onPostChange = (text) => {
          let action = updateNewPostActionCreator(text);
          store.dispatch(action);
        }

        return (
          <MyPosts updateNewPostActionCreator={ onPostChange } 
              addPost={ addPost } 
              posts={state.profilePage.postData}
              newPostText={state.profilePage.newPostText} />
        )
      }
    }
    </StoreContext.Consumer>         
  )
}

export default MyPostsContainer