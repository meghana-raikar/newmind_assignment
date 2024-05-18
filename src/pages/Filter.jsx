import React, { useState } from "react";
import "./filter.css";

const Filter = () => {
  // Define options for each filter
  const options = {
    id: ["ID 1", "ID 2", "ID 3"],
    template: ["Template 1", "Template 2", "Template 3"],
    modelType: ["Model Type 1", "Model Type 2", "Model Type 3"],
    theme: ["Theme 1", "Theme 2", "Theme 3"],
    usage: ["Usage 1", "Usage 2", "Usage 3"],
  };

  // State to store selected options and dropdown visibility
  const [selectedOptions, setSelectedOptions] = useState({
    id: [],
    template: [],
    modelType: [],
    theme: [],
    usage: [],
  });

  const [dropdownOpen, setDropdownOpen] = useState({
    id: false,
    template: false,
    modelType: false,
    theme: false,
    usage: false,
  });

  const [filterOpen, setFilterOpen] = useState(true); // State to track filter container visibility

  // Handle checkbox change
  const handleCheckboxChange = (filter, option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [filter]: prev[filter].includes(option)
        ? prev[filter].filter((item) => item !== option)
        : [...prev[filter], option],
    }));
  };

  // Handle "Select All" functionality
  const handleSelectAll = (filter) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [filter]:
        prev[filter].length === options[filter].length ? [] : options[filter],
    }));
  };

  // Toggle dropdown visibility
  const toggleDropdown = (filter) => {
    setDropdownOpen((prev) => ({ ...prev, [filter]: !prev[filter] }));
  };

  // Toggle filter container visibility
  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  // Generate filter section
  const renderFilterSection = (filter, label) => (
    <div className="filter-section" key={filter}>
      <label htmlFor={`${filter}-options`}>{label}</label>
      <div className="input-group">
        <input
          className="choosediv"
          type="text"
          value={selectedOptions[filter].join(", ")}
          readOnly
          onClick={() => toggleDropdown(filter)}
          placeholder="choose"
        />
        <img
          src="/images/down-arrow.svg"
          alt=""
          onClick={() => toggleDropdown(filter)}
          className="dropdown-arrow"
        />
        {dropdownOpen[filter] && (
          <div className="dropdown-menu">
            {options[filter].map((option, index) => (
              <div key={index}>
                <label>
                  <input
                    type="checkbox"
                    value={option}
                    checked={selectedOptions[filter].includes(option)}
                    onChange={() => handleCheckboxChange(filter, option)}
                  />
                  {option}
                </label>
              </div>
            ))}
            <label>
              <input
                type="checkbox"
                checked={
                  selectedOptions[filter].length === options[filter].length
                }
                onChange={() => handleSelectAll(filter)}
              />
              Select All
            </label>
          </div>
        )}
      </div>
    </div>
  );

  return filterOpen ? (
    <div className="filter-container">
      <div className="filter-title">
        <div className="filter-title-wrap">
          <span>
            <img src="/images/filter.svg" alt="" />
            <p>Filter</p>
          </span>
        </div>
        <div className="filter-close" onClick={toggleFilter}>
          {" "}
          {/* Close icon */}
          <img src="/images/close.svg" alt="" />
        </div>
      </div>
      <div className="dropdowns">
        <div className="filter-select-container">
          {renderFilterSection("id", "ID")}
          {renderFilterSection("template", "Template Name")}
        </div>
        <div className="model-type-container">
          {renderFilterSection("modelType", "Model Type")}
        </div>
        <div className="theme-and-usage">
          {renderFilterSection("theme", "Model Usage Preferences")}
          {renderFilterSection("usage", "Social Theme")}
        </div>
      </div>
      <div className="filter-btn">
        <button className="clear-filter-btn">Clear Filters</button>
        <button className="cancel-btn">Cancel</button>
        <button className="apply-btn">Apply</button>
      </div>
    </div>
  ) : null;
};

export default Filter;
