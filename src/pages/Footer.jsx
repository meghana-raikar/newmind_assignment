import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="per-page">
        <p>
          <strong>10</strong> per page{" "}
          <img src="/images/down-arrow.svg" alt="" />
        </p>
      </div>

      <div className="page-no">
        <div className="number-box">
          <img src="/images/left-arrow.svg" alt="" />
        </div>
        <div className="number-box first">
          <p >1</p>
        </div>
        <div className="number-box">
          <p>2</p>
        </div>
        <div className="number-box">
          <p>3</p>
        </div>
        <div className="number-box">
          <img src="/images/right-arrow.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer