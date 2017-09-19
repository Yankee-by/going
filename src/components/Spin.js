import React from 'react';
import Spinner from 'react-spinkit';
import './Spin.css';

const Spin = () => {
    return (
      <div className="spinner_container">
        <Spinner name="line-scale-pulse-out-rapid" />
      </div>
    )
}

export default Spin;