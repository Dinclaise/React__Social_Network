import React from 'react';
import cls from './MyPosts.module.css';
import Post from './Posts/Post';



const MyPosts = (props) => {
  let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

  // let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = (event) => {
    let text = event.target.value;
    props.updateNewPostActionCreator(text);
  }


  return (
    <div className={cls.postsBlock}>
      My posts
      <div>
        <div className={cls.textArea}>
          <textarea onChange={onPostChange} value={props.newPostText}/>
        </div>
        <div className={cls.btnPost}>
          <button onClick={onAddPost}>Add Post</button>
        </div>
        
      </div>

      <div className={cls.posts}>
        { postsElements }
      </div>
    </div>
  )
}

export default MyPosts