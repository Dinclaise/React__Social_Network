import React from 'react';
import {connect} from 'react-redux';
import { 
    follow,
    unfollow,
    setCurrentPage,
    toggleIsFollowingProgress,
    requestUsers } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { selectorGetUsers, 
    selectorUsersPage, 
    selectorTotalUsersCount, 
    selectorCurrentPage, 
    selectorIsFetching, 
    selectorFollowingInProgress} from '../../redux/Selectors/users-selector';



class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }
    
    render () {
        return ( 
            <>  {this.props.isFetching ? 
                     <Preloader />: null}
                <Users totalUsersCount ={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        followingInProgress={this.props.followingInProgress} 
                />

            </>
        )
    }
}



let mapStateToProps = (state) => {
    return {
        users: selectorGetUsers(state),
        pageSize: selectorUsersPage(state),
        totalUsersCount: selectorTotalUsersCount(state),
        currentPage: selectorCurrentPage(state),
        isFetching: selectorIsFetching(state),
        followingInProgress: selectorFollowingInProgress(state)
    }
}


export default compose(
    connect(mapStateToProps, {
        follow,unfollow,
        setCurrentPage,toggleIsFollowingProgress,
        getUsers: requestUsers}),
    // withAuthRedirect
)(UsersContainer)





    // How was!
/* let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },

        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },

        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },

        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
} */

