import React, { useState } from "react";
import "./filter.css";

const Filter = () => {
  const options = ["Option 1", "Option 2", "Option 3"]; // Define your options here
  const [selectedOptions, setSelectedOptions] = useState([]); // State to store selected options
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleSelectAll = () => {
    if (selectedOptions.length === options.length) {
      setSelectedOptions([]);
    } else {
      setSelectedOptions(options);
    }
  };

  return (
    <>
      <div className="filter-container">
        {/* top bar */}
        <div className="filter-title">
          <div className="filter-title-wrap">
            <span>
              <img src="/images/filter.svg" alt="" />
              <p>Filter</p>
            </span>
          </div>
          <div className="filter-close">
            <img src="/images/close.svg" alt="" />
          </div>
        </div>

        {/* select the filter requirements */}
        <div className="filter-select">
          <label htmlFor="options">Choose options:</label>
          <div className="input-group">
            <input
              type="text"
              value={selectedOptions.join(", ")}
              readOnly
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <div className="dropdown-menu">
                {options.map((option, index) => (
                  <div key={index}>
                    <label>
                      <input
                        type="checkbox"
                        value={option}
                        checked={selectedOptions.includes(option)}
                        onChange={() => handleCheckboxChange(option)}
                      />
                      {option}
                    </label>
                  </div>
                ))}
                <label>
                  <input
                    type="checkbox"
                    checked={selectedOptions.length === options.length}
                    onChange={handleSelectAll}
                  />
                  Select All
                </label>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
