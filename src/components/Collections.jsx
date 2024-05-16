import React, { useState } from "react";
import "./collection.css";

const Collections = () => {
  const [openIndices, setOpenIndices] = useState([]);
  const [activeItems, setActiveItems] = useState([]);

  const toggleItem = (index) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((item) => item !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  const toggleTemplate = (index) => {
    if (activeItems.includes(index)) {
      setActiveItems(activeItems.filter((item) => item !== index));
    } else {
      setActiveItems([...activeItems, index]);
    }
  };

  return (
    <div className="collection-container">
      <div className="collection-heading">
        <div className="heading">
          <p className="text">Collections</p>
        </div>
      </div>

      <div className="accordion">
        <div className="accordion-item">
          <div className="accordion-title" onClick={() => toggleItem(0)}>
            <div className="accordion-text">Firm Collection</div>
            {openIndices.includes(0) ? (
              <img
                src="/images/up-arrow.svg" // Change this to the path of your SVG image
                alt="Up Arrow"
                className="arrow"
              />
            ) : (
              <img
                src="/images/down-arrow.svg" // Change this to the path of your SVG image
                alt="Down Arrow"
                className="arrow"
              />
            )}
          </div>
          {openIndices.includes(0) && (
            <div className="accordion-content">
              <ul>
                <div
                  className={`templatelist ${
                    activeItems.includes(0) ? "active" : ""
                  }`}
                  onClick={() => toggleTemplate(0)}
                >
                  <img
                    src="/images/all-templates.svg"
                    alt=""
                    className="collection-img"
                  />
                  <p>All Template</p>
                </div>
                <div
                  className={`templatelist ${
                    activeItems.includes(1) ? "active" : ""
                  }`}
                  onClick={() => toggleTemplate(1)}
                >
                  <img
                    src="/images/contract-templates.svg"
                    alt=""
                    className="collection-img"
                  />
                  <p>Contract Template</p>
                </div>
                <div
                  className={`templatelist ${
                    activeItems.includes(2) ? "active" : ""
                  }`}
                  onClick={() => toggleTemplate(2)}
                >
                  <img
                    src="/images/document-templates.svg"
                    alt=""
                    className="collection-img"
                  />
                  <p>Document Template</p>
                </div>
                <div
                  className={`templatelist ${
                    activeItems.includes(3) ? "active" : ""
                  }`}
                  onClick={() => toggleTemplate(3)}
                >
                  <img
                    src="/images/petition-templates.svg"
                    alt=""
                    className="collection-img"
                  />
                  <p>Petition Template</p>
                </div>
              </ul>
            </div>
          )}
        </div>

        <div className="accordion-item">
          <div className="accordion-title" onClick={() => toggleItem(1)}>
            <div className="accordion-text">Mufti Collection</div>
            {openIndices.includes(1) ? (
              <img
                src="/images/up-arrow.svg" // Change this to the path of your SVG image
                alt="Up Arrow"
                className="arrow"
              />
            ) : (
              <img
                src="/images/down-arrow.svg" // Change this to the path of your SVG image
                alt="Down Arrow"
                className="arrow"
              />
            )}
          </div>
          {openIndices.includes(1) && (
            <div className="accordion-content">
              <ul>
                <div
                  className={`templatelist ${
                    activeItems.includes(4) ? "active" : ""
                  }`}
                  onClick={() => toggleTemplate(4)}
                >
                  <img
                    src="/images/all-templates.svg"
                    alt=""
                    className="collection-img"
                  />
                  <p>All Template</p>
                </div>
                <div
                  className={`templatelist ${
                    activeItems.includes(5) ? "active" : ""
                  }`}
                  onClick={() => toggleTemplate(5)}
                >
                  <img
                    src="/images/contract-templates.svg"
                    alt=""
                    className="collection-img"
                  />
                  <p>Contract Template</p>
                </div>
                <div
                  className={`templatelist ${
                    activeItems.includes(6) ? "active" : ""
                  }`}
                  onClick={() => toggleTemplate(6)}
                >
                  <img
                    src="/images/document-templates.svg"
                    alt=""
                    className="collection-img"
                  />
                  <p>Document Template</p>
                </div>
                <div
                  className={`templatelist ${
                    activeItems.includes(7) ? "active" : ""
                  }`}
                  onClick={() => toggleTemplate(7)}
                >
                  <img
                    src="/images/petition-templates.svg"
                    alt=""
                    className="collection-img"
                  />
                  <p>Petition Template</p>
                </div>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collections;
