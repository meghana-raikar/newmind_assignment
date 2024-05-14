import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar-container">
        <img src="/images/logo.svg" alt="Logo" className="logo" />
        <p className="logoname">Müellif </p>
      </div>

      <div className="dashboard box">
        <img className="dashboardimg img" src="/images/dashboard.svg" alt="" />
        <p className="dashboardname name">Dashboard</p>
      </div>

      <div className="collection box">
        <img
          className="collectionimg img"
          src="/images/collections.svg"
          alt=""
        />
        <p className="collectionname name">Collections</p>
      </div>

      <div className="template box">
        <img className="templateimg img" src="/images/templates.svg" alt="" />
        <p className="templatename name">Templates</p>
      </div>

      <div className="work box">
        <img className="workimg img" src="/images/works.svg" alt="" />
        <p className="workname name">Works</p>
      </div>

      <div className="report box">
        <img className="reportimg img" src="/images/reports.svg" alt="" />
        <p className="reportname name">Reports</p>
      </div>

      <div className="admin box">
        <img className="adminimg img" src="/images/admin-panel.svg" alt="" />
        <p className="adminname name">Admin Panel</p>
      </div>

      <div className="profile box">
        <img className="profile" src="/images/profile.png" alt=""/>
      </div>
    </>
  );
};

export default Sidebar;
