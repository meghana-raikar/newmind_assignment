import React from 'react'
import './collection.css'

const Collections = () => {
  return (
    <div className="collection-container">
      <div className="collection-heading">
        <p className="heading">Collections</p>
      </div>

      <div className="firm-collection">
        <p className="firm-text">Firm Collection</p>
        <div className="arrowbox">
          <img src="/images/down-arrow.svg" alt="" className="downarrow" />
        </div>
      </div>
    </div>
  );
}

export default Collections