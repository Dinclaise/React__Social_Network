import React from 'react';
import cls from './Paginator.module.css'



let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

    return (
        <div>
            <div>
                {pages.map( p => { 
                    if (p < 13) {
                        return <span className={props.currentPage === p && cls.selectedPage}
                        onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
                    }
                })}
            </div>
        </div>
    )
}

export default Paginator;