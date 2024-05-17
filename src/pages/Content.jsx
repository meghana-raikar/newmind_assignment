import React, { useState } from "react";
import "./content.css";

const Content = ({ id, isBookmarked, toggleBookmark }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown_container ${isOpen ? "open" : "closed"}`}>
      <div className="left" onClick={toggleContent}>
      
        <span>
          <strong>RRM0002</strong>
          <p className="light-text">Model Contract Name</p>
          <p className="dark-text"> Akaryakıt İstasyonu Kira Sözleşmesi</p>
          <p className="light-text">Contract Type</p>
          <p className="dark-text"> Hisse Alım Sözleşmesi</p>
          <p className="light-text">Date/Time</p>
          <p className="dark-text"> 27.10.2014 | 12:30</p>
        </span>
      </div>
      <div className="right">
        <p className="light-text-right">About Model</p>
        <p className="dark-text-right">
          Çalışanın işverene bağlı olarak iş görmesine, işverenin ise sözleşmede
          kararlaştırılan ücreti sözleşmenin hüküm ve koşullarına uygun olarak
          çalışana ödemesine yönelik tarafların hak ve yükümlülüklerinin
          belirlenmesidir.
        </p>
        <p className="light-text-right">Model Usage Preferences</p>
        <p className="dark-text-right">
          İşveren Lehine | Belirsiz Süreli | Beyaz Yaka | Tam Zamanlı
        </p>
        <div className="buttons">
          <button className="view-model">View Model</button>
          <button className="model-details-btn">Model Details</button>
          <button className="select-continue">Select and Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Content;
