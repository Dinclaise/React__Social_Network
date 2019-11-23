import React from 'react';
import cls from './FriendsList.module.css';
import {NavLink} from 'react-router-dom';
import FriendsList from './FriendsList';
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
  return {
    friendsPage: state.friendsPage,
    list: state.friendsPage.friendsList
  }
}

const FriendsListContainer = connect(mapStateToProps)(FriendsList)

export default FriendsListContainer