import { userAPI } from '../api/api';
import { updateObjectInArray } from '../utilities/objects-helpers';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
  usersData: [ ],
  pageSize: 15,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [5093],
  newPostText: 'Hi, i am Anthony!'
}

const usersReducer = (state = initialState, action) => {

    switch(action.type) {
        case FOLLOW: 
          return {
            ...state, 
            usersData: updateObjectInArray(state.usersData, action.userId, "id", {followed: true} )
          }

        case UNFOLLOW:
            return {
              ...state, 
              usersData: updateObjectInArray(state.usersData, action.userId, "id", {followed: false} )
            }
        
        case SET_USERS: 
          return {
            ...state, usersData: action.users
          }

        case SET_CURRENT_PAGE: 
          return {
            ...state, currentPage: action.currentPage
          }  

        case SET_TOTAL_USERS_COUNT: 
          return {
            ...state, totalUsersCount: action.count
          }  

        case TOGGLE_IS_FETCHING: 
          return {
            ...state, isFetching: action.isFetching
          }    

        case TOGGLE_IS_FOLLOWING_PROGRESS: 
          return {
            ...state, 
            followingInProgress: action.isFetching
             ? [...state.followingInProgress, action.userId] 
             : state.followingInProgress.filter(id => id !== action.userId)
          }    

        default: 
            return state;
    }
}


// Action
export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});


// Thunk
export const requestUsers = (page, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));
    
    let data = await userAPI.getUsers(page, pageSize)
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
}


const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toggleIsFollowingProgress(true, userId));

    let response = await apiMethod(userId);
      if (response.data.resultCode === 0) { 
        dispatch(actionCreator(userId)); 
      }

      dispatch(toggleIsFollowingProgress(false, userId));
}

export const follow = (userId) => async (dispatch) => {
    let apiMethod = userAPI.followUser.bind(userAPI);
    let actionCreator = followSuccess;
    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
}

export const unfollow = (userId) => async (dispatch) => {
    let apiMethod = userAPI.unfollowUser.bind(userAPI);
    let actionCreator = unfollowSuccess;
    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);  
}


export default usersReducer;