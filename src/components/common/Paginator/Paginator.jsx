import React, {useState} from 'react';
import cls from './Paginator.module.css';



let Paginator = ({totalUsersCount, pageSize, portionSize = 12, onPageChanged, currentPage}) => {
   let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return <div className={cls.paginator}>
        { portionNumber > 1 &&
        <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }

            {pages
                .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
                .map((p) => {
                return <span className={` ${cls.selectedPage} ${ cls.pageNumber } `}
                             key={p}
                             onClick={(e) => {
                                 onPageChanged(p);
                             }}>{p}</span>
            })}
        { portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }


    </div>
}

export default Paginator;