import { userAPI, profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';


let initialState = {
  postData: [
      {id: 1, message: 'Hi, i am new here!', likesCount: 42},
      {id: 2, message: 'Best app in the world.', likesCount: 21},
      {id: 3, message: 'It was cool!', likesCount: 23}
  ],
  profile: null,
  status: ""
  // newPostText: 'it-kamasutra.com',
}

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
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
        // case UPDATE_NEW_POST_TEXT: {
        //   return {
        //     ...state,
        //     newPostText: action.newText
        //   };
        // }
        case SET_USER_PROFILE: {
          return {
            ...state,
            profile: action.profile
          }
        }
        case SET_STATUS: {
          return {
            ...state,
            status: action.status
          }
        }
        case DELETE_POST: {
          return {
            ...state,
            posts: state.postData.filter( p => p.id != action.postId)
          }
        }
        
        default: 
            return state;
    }
}



export const addPostActionCreator = (newPostText) => {
    return {
      type: ADD_POST, newPostText
    }
};

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});


// THUNK
export const getUserProfile = (userId) => async (dispatch) => {
    let response = await userAPI.getProfile(userId);
      dispatch(setUserProfile(response.data));
    
}

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));

}

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
}

export default profileReducer;