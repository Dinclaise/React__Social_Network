import React from 'react';
import cls from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = (props) => {
  let postsElements = props.post.map( p => <Post message={p.message} likesCount={p.likesCount}/>);


  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  }

  return (
    <div className={cls.postsBlock}>
      My posts
      <div>
        <div className={cls.textArea}>
          <textarea ref={newPostElement}></textarea>
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