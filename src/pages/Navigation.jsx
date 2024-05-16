import React from 'react'
import './navigation.css'

const Navigation = () => {
  return (
    <>
      <div className="navigation-container">
        <span className="span">
          <img src="/images/home.svg" alt="" />
        </span>
        <span className="span">
          <img src="/images/right-arrow.svg" alt="" />
        </span>
        <span className="span">
          <p >Client </p>
        </span>
        <span className="span">
          <img src="/images/right-arrow.svg" alt="" />
        </span>
        <span className="span">
          <p >Matter</p>
        </span>
        <span className="span">
          <img src="/images/right-arrow.svg" alt="" />
        </span>
        <span className="span">
          <p id='bold'>Collections</p>
        </span>
      </div>
    </>
  );
}

export default Navigation