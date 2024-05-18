import React, { useState } from "react";
import "./record.css";
import Accordionbody from "./Accordionbody";
import Filter from "./Filter";

const Records = () => {
  // State to manage the visibility of the Filter component
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  // Function to toggle the visibility of the Filter component
  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div className="records-container">
      <div className="top-section">
        <div className="search-container">
          <span className="search-icon"></span>{" "}
          {/* Search icon inside the search bar */}
          <input
            type="text"
            className="searchbar"
            placeholder="Write something about the template you want to find"
          />
          {isFilterVisible && <Filter />}
          <span className="filter" onClick={toggleFilter}>
            <img src="/images/filter.svg" alt="" />
          </span>
        </div>
        <div className="record-found">
          <p>
            <b>125</b> Records Found
          </p>
        </div>
      </div>
      <div className="accordion-container">
        {/* Accordionbody component goes here */}
        <Accordionbody />
      </div>
    </div>
  );
};

export default Records;
