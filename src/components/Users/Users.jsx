import React from 'react';
import cls from './Users.module.css'
import Paginator from '../common/Paginator/Paginator';
import UserChoice from './UserChoice';


let Users = ({currentPage, selectedPage, onPageChanged, totalUsersCount, pageSize, ...props}) => {
    return (
        <div>
                <Paginator currentPage={currentPage} selectedPage={selectedPage} onPageChanged={onPageChanged} 
                            pageSize={pageSize} totalUsersCount={totalUsersCount} />
                            
                <div className={cls.userWrapper}>
                    { props.users.map( u => <UserChoice user={u} key={u.id}
                                                        followingInProgress={props.followingInProgress}
                                                        unfollow={props.unfollow}
                                                        follow={props.follow} 
                                                        />)
                    }
                </div>
        </div>
    )
}

export default Users;