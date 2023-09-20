import React, { useState } from "react";
import "./clientSlider.css";

export const ClientsSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="slider-container--section">
      <div className="slider-info--container">
        <div className="slider-info--upper">
          <div className="title">{slides[currentIndex]?.name}</div>
          <div className="text">{slides[currentIndex]?.desc}</div>
        </div>
        <div className="slider-info--lower">
          {slides[currentIndex]?.message}
        </div>
        <div className="slider-dots--container">
          {slides?.map((slide, index) => (
            <span
              onClick={() => setCurrentIndex(index)}
              className="slider-dot"
              style={currentIndex === index ? { backgroundColor: "white" } : {}}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};
