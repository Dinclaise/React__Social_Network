import {createSelector} from 'reselect';

const getUsers = (state) => {
    return state.usersPage.usersData;
}

export const selectorGetUsers = createSelector(getUsers , (users) => {
    return users.filter( u => true);
})

export const selectorUsersPage = (state) => {
    return state.usersPage.pageSize;
}
export const selectorTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}
export const selectorCurrentPage = (state) => {
    return state.usersPage.currentPage;
}
export const selectorIsFetching = (state) => {
    return state.usersPage.isFetching;
}
export const selectorFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}
