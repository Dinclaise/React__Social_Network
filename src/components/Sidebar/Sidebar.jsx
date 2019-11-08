import React from 'react';
import cls from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={cls.sidebar}>
            <div>
                Recent Decision
            </div>
            <div className={cls.blog_wrapper}>
                <div>
                    Blog 1 
                </div>
                <div>
                    Blog 2
                </div>
            </div>
        </div>
  )
}

export default Sidebar