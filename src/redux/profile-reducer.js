const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
  postData: [
      {id: 1, message: 'Hi, i am new here!', likesCount: 42},
      {id: 2, message: 'Best app in the world.', likesCount: 21},
      {id: 3, message: 'It was cool!', likesCount: 23}
  ],
  newPostText: 'it-kamasutra.com'
}

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: 
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };

            state.postData.push(newPost);
            state.newPostText = '';

            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;

            return state;
        
        default: 
            return state;
    }
}



export const addPostActionCreator = () => {
    return {
      type: ADD_POST
    }
  }
  
export const updateNewPostActionCreator = (text) => {
    return {
      type: UPDATE_NEW_POST_TEXT, newText: text
    }
  }

export default profileReducer;