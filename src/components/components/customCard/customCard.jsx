import React from "react";
import Lotie from "lottie-react";

export const CustomCard = ({ icon, name, description }) => {
  return (
    <div className="service-use--container">
      <div className="service-use--container-upper">
        <Lotie className="service-use--icon" animationData={icon} />
        <div className="service-use-upper--title">{name}</div>
      </div>
      <div className="service-use--container-lower">{description}</div>
    </div>
  );
};
