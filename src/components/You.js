import React from 'react';
import './You.css';
import you from '../assets/you2.svg';

const You = () => {
    return (
      <div className="you">
        <img src={you} alt="" className='you_svg'/>
      </div>
    )
}

export default You;