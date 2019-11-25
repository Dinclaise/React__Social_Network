import React from 'react';
import cls from './MyPosts.module.css';
import Post from './Posts/Post';
import {Field, reduxForm} from 'redux-form';



const MyPosts = (props) => {
  let postsElements = props.posts.map( p => <Post message={p.message} key={p.id} likesCount={p.likesCount}/>);

  // let newPostElement = React.createRef();

  let onAddPost = (value) => {
    props.addPost(value.newPostText);
  }


  return (
    <div className={cls.postsBlock}>
      <div>
        My posts
      </div>

      <AddMyPostRedux onSubmit={onAddPost}/>
      
      <div className={cls.posts}>
        { postsElements }
      </div>
    </div>
  )
}

const AddMyPost = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
        <div className={cls.textArea}>
          <Field placeholder={"Добавить пост"} value={props.newPostText} name={"newPostText"} component={"textarea"}/>
        </div>
        <div className={cls.btnPost}>
          <button>Add Post</button>
        </div>
        
      </form>
  )
}

const AddMyPostRedux = reduxForm({form:"myPostForm"})(AddMyPost)
export default MyPosts