import React from "react";
import "./homeData.css";

function HomeData({ img, title, desc }) {
  return (
   
      <div className="service_cards">
        <div className="service_col">
          <div className="service_row">
            <img className="serviceImg" src={img} alt="" />
            <h2 className="title">{title}</h2>
          </div>
          <div className="service_col_paragraph">
            <p className="desc">{desc}</p>
          </div>
        </div>
      </div>
  );
}

export default HomeData;
