import React from 'react';
import cls from './MyPosts.module.css';
import Post from './Posts/Post';
import {addPostActionCreator, updateNewPostActionCreator} from '../../../redux/profile-reducer'




const MyPosts = (props) => {
  let postsElements = props.post.map( p => <Post message={p.message} likesCount={p.likesCount}/>);


  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostActionCreator(text);
    props.dispatch(action);
  }


  return (
    <div className={cls.postsBlock}>
      My posts
      <div>
        <div className={cls.textArea}>
          <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
        </div>
        <div className={cls.btnPost}>
          <button onClick={addPost}>Add Post</button>
        </div>
        
      </div>

      <div className={cls.posts}>
        { postsElements }
      </div>
    </div>
  )
}

export default MyPosts