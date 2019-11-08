import React from 'react';
import cls from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = () => {
  return (
    <div className={cls.postsBlock}>
      My posts
      <div>
        <div className={cls.textArea}>
          <textarea></textarea>
        </div>
        <div className={cls.btnPost}>
          <button >Add Post</button>
        </div>
        
      </div>

      <div className={cls.posts}>
        <Post message="Hi, i am new here" likeAttr="like 21" />
        <Post message="Best app in the world." likeAttr="like 42" />
      </div>
    </div>
  )
}

export default MyPosts