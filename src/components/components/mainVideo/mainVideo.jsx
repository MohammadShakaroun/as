import React from "react";
import world from "../../../assets/videos/world.mp4";
import "./mainVideo.css";
import placeholder from "../../../assets/images/placeholder.png";

export const MainVideo = () => {
  return (
    <div className='video-container'>
      <video
        type='video/mp4'
        playsInline
        className='video-inner'
        autoPlay
        poster={placeholder}
        loop
        muted
        src={world}
      ></video>
    </div>
  );
};
