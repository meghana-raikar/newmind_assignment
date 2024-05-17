import React, { useState, useEffect } from "react";
import "./accordionbody.css";
import Content from "../pages/Content";

const Accordionbody = () => {
  const [expandedRows, setExpandedRows] = useState([]);
  const [bookmarkedRows, setBookmarkedRows] = useState([]);
  const [details, setDetails] = useState([]);

  const toggleRow = (id) => {
    if (expandedRows.includes(id)) {
      setExpandedRows(expandedRows.filter((rowId) => rowId !== id));
    } else {
      setExpandedRows([...expandedRows, id]);
    }
  };

  const toggleBookmark = (id) => {
    if (bookmarkedRows.includes(id)) {
      setBookmarkedRows(bookmarkedRows.filter((rowId) => rowId !== id));
    } else {
      setBookmarkedRows([...bookmarkedRows, id]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:3000/data/data.json")
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
      })
      .catch((e) => console.log(e.message));
  };

  const isRowExpanded = (id) => expandedRows.includes(id);
  const isRowBookmarked = (id) => bookmarkedRows.includes(id);

  return (
    <table className="column">
      <thead className="table_title">
        <tr>
          <th></th>
          <th></th>
         
          <th>ID</th>
          <th>Template Name</th>
          <th>Model Type</th>
          <th>Update Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody className="table_body">
        {details.map((row) => (
          <React.Fragment key={row.key}>
            <tr onClick={() => toggleRow(row.key)}>
              <td>
                <img
                  src={
                    isRowExpanded(row.key)
                      ? "/images/up-arrow.svg"
                      : "/images/down-arrow.svg"
                  }
                />
              </td>
              <td>
                <img
                  src={
                    isRowBookmarked(row.key)
                      ? "/images/star-filled.svg"
                      : "/images/star-empty.svg"
                  }
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleBookmark(row.key);
                  }} // Prevent row click propagation
                />
              </td>
            
              <td>{row.id}</td>
              <td>{row.template_name}</td>
              <td>{row.model_type}</td>
              <td>{row.updateDate}</td>
              <td className="actions">
                <span>
                  <img src="/images/preview.svg" alt="" />
                </span>
                <span>
                  <img src="/images/continue.svg" alt="" />
                </span>
                <span>
                  <img src="/images/information.svg" alt="" />
                </span>
                <span>
                  <img src="/images/copyurl.svg" alt="" />
                </span>
              </td>
            </tr>
            {isRowExpanded(row.key) && (
              <tr key={row.key + "_expanded"}>
                <td colSpan="8">
                  <Content />
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default Accordionbody;
