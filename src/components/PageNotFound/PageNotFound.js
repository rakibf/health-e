import React from 'react';
import pageNotFound from '../../404.jpg';
import './PageNotFound.css';
const PageNotFound = () => {
    return (
        <div className='page-not-found'>
            <img src={pageNotFound} alt="" className='mw-100'/>
        </div>
    );
};

export default PageNotFound;