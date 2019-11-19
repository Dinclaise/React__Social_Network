const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {
  postData: [
      {id: 1, message: 'Hi, i am new here!', likesCount: 42},
      {id: 2, message: 'Best app in the world.', likesCount: 21},
      {id: 3, message: 'It was cool!', likesCount: 23}
  ],
  newPostText: 'it-kamasutra.com',
  profile: null,
  statusUserProfile: null
}

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
              ...state,
              postData: [...state.postData, newPost],
              newPostText: ''
            };
            // stateCopy.postData = [...state.postData];
            // stateCopy.postData.push(newPost);
            // stateCopy.newPostText = '';
        }
        case UPDATE_NEW_POST_TEXT: {
          return {
            ...state,
            newPostText: action.newText
          };
        }
        case SET_USER_PROFILE: {
          return {
            ...state,
            profile: action.profile
          }
        }
        
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

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export default profileReducer;