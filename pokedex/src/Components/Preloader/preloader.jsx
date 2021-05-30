import React from 'react';
import preloader from './../../Images/preloader.gif';
import './preloader.css';

const Preloader = ()=>{
    return(
        <div className={'preloader'} >
            <img src={preloader} alt="" />
        </div>
    )
}

export default Preloader;