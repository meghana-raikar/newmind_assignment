import React, { useState } from "react";
import "./content.css";

const Content = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown_container ${isOpen ? "open" : "closed"}`}>
      <div className="left" onClick={toggleContent}>
        <span>
          hbshdbhashghsdssd Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nam dolor fuga. Ab eius obcaecati dicta veritatis! Perspiciatis itaque facere obcaecati voluptatibus. Quam consequatur officiis ab aut quaerat. Adipisci enim, libero illo temporibus itaque quidem ducimus eaque autem ad, nam voluptates. Iste, fuga id? Dolor et atque nisi. Doloremque, voluptatum!

        </span>
      </div>
      {/* Additional content goes here */}
    </div>
  );
};

export default Content;
