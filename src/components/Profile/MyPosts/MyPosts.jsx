import React from 'react';
import cls from './MyPosts.module.css';
import Post from './Posts/Post';
import {Field, reduxForm} from 'redux-form';
import {required, maxLengthCreator} from '../../../utilities/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';



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


const maxLength10 = maxLengthCreator(10);


const AddMyPost = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
        <div className={cls.textArea}>
          <Field placeholder={"Добавить пост"}
                 name={"newPostText"} component={Textarea}
                 validate={[required, maxLength10]}/>
        </div>
        <div className={cls.btnPost}>
          <button>Add Post</button>
        </div>
        
      </form>
  )
}

const AddMyPostRedux = reduxForm({form:"myPostForm"})(AddMyPost)
export default MyPosts