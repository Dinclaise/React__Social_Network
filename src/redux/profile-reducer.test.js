import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
  postData: [
      {id: 1, message: 'Hi, i am new here!', likesCount: 42},
      {id: 2, message: 'Best app in the world.', likesCount: 21},
      {id: 3, message: 'It was cool!', likesCount: 23}
  ]
}

it('length of post should be incremented', () => {
  //1. test Data
  let action = addPostActionCreator('kawa-banga!')
  
  // 2. action
  let newState = profileReducer(state, action);

  //3. expectation

  expect(newState.postData.length).toBe(4);
});

it('Length after delete must be correct, () => {
  //1. test Data
  let action = deletePost(1);
  
  // 2. action
  let newState = profileReducer(state, action);

  //3. expectation

  expect(newState.postData.length).toBe(2);
});



