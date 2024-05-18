import React from 'react'
import  './body.css'
import Navigation from "../pages/Navigation";
import Records from '../pages/Records';
import Footer from '../pages/Footer';

const Body = () => {
  return (
    <>
      <div className="body-container">
        <Navigation />
        <Records />
        <Footer />
      </div>

    </>
  );
}

export default Body