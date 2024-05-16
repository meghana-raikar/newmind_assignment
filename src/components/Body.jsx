import React from 'react'
import  './body.css'
import Navigation from "../pages/Navigation";
import Records from '../pages/Records';

const Body = () => {
  return (
    <>
      <div className="body-container">
        <Navigation />
        <Records />
      </div>

    </>
  );
}

export default Body