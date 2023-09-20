import React from "react";
import Lottie from "lottie-react";
import "./cultureAboutUs.css";

function CultureAboutUs({ gif, name, description }) {
  return (
    <div className="culture-container--main">
      <div className="card">
        <div className="divGifImgCard">
          <Lottie className="gifImgCard" animationData={gif} />
        </div>
        <div className="colDescription">
          <div className="nameCard">{name}</div>
          <div className="descCard">{description}</div>
        </div>
      </div>
    </div>
  );
}

export default CultureAboutUs;
