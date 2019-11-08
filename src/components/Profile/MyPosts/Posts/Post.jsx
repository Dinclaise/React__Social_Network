import React from 'react';
import cls from './Post.module.css';

const Post = (props) => {
    return (
            <div className={cls.item}>
              <img src='https://sun9-4.userapi.com/c824201/v824201969/173426/YW0DIgHPsvw.jpg?ava=1'/>
              {props.message}
              <div>
                <span>{props.likeAttr}</span>
              </div>
            </div>
  )
}

export default Post