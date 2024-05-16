// Sidebar.js

import React, { useState } from "react";
import "./sidebar.css";

const Sidebar = () => {
  // State to track the currently selected item
  const [selectedItem, setSelectedItem] = useState(null);

  // Function to handle item click
  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <img src="/images/logo.svg" alt="Logo" className="logo" />
        <p className="logoname">Müellif</p>
      </div>

      <div
        className={
          "dashboard box" + (selectedItem === "Dashboard" ? " selected" : "")
        }
        onClick={() => handleItemClick("Dashboard")}
      >
        <img className="dashboardimg img" src="/images/dashboard.svg" alt="" />
        <p className="dashboardname name">Dashboard</p>
      </div>

      <div
        className={
          "collection box" + (selectedItem === "Collections" ? " selected" : "")
        }
        onClick={() => handleItemClick("Collections")}
      >
        <img
          className="collectionimg img"
          src="/images/collections.svg"
          alt=""
        />
        <p className="collectionname name">Collections</p>
      </div>

      <div
        className={
          "template box" + (selectedItem === "Templates" ? " selected" : "")
        }
        onClick={() => handleItemClick("Templates")}
      >
        <img className="templateimg img" src="/images/templates.svg" alt="" />
        <p className="templatename name">Templates</p>
      </div>

      <div
        className={"work box" + (selectedItem === "Works" ? " selected" : "")}
        onClick={() => handleItemClick("Works")}
      >
        <img className="workimg img" src="/images/works.svg" alt="" />
        <p className="workname name">Works</p>
      </div>

      <div
        className={
          "report box" + (selectedItem === "Reports" ? " selected" : "")
        }
        onClick={() => handleItemClick("Reports")}
      >
        <img className="reportimg img" src="/images/reports.svg" alt="" />
        <p className="reportname name">Reports</p>
      </div>

      <div
        className={
          "admin box" + (selectedItem === "Admin Panel" ? " selected" : "")
        }
        onClick={() => handleItemClick("Admin Panel")}
      >
        <img className="adminimg img" src="/images/admin-panel.svg" alt="" />
        <p className="adminname name">Admin Panel</p>
      </div>

      <div
        className={
          "profile box" + (selectedItem === "Profile" ? " selected" : "")
        }
        onClick={() => handleItemClick("Profile")}
      >
        <img className="profile" src="/images/profile.png" alt="" />
      </div>
    </div>
  );
};

export default Sidebar;
