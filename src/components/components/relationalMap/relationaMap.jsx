import React from "react";
import "./relationalMap.css";
import mapVideo from "../../../assets/mapVideo/mapVideo.mp4";
import { WithService } from "../../highOrderComponents/withService";
import { useTranslation } from "react-i18next";
import placeholder from "../../../assets/images/placeholder2.png";

function RelationalMap() {
  const { t } = useTranslation();
  return (
    <div className='map-video--container'>
      <div className='map-video--overlay'></div>
      <div className='map-video--textcontainer'>
        <WithService initialScale={0} visibleScale={1} duration={1} delay={0.3}>
          <span className='map-video--upperText'>{t("CENTER_MAP_1")}</span>
        </WithService>
        <WithService initialScale={0} visibleScale={1} duration={1} delay={0.3}>
          <span className='map-video--lowerText'>{t("CENTER_MAP_2")}</span>
        </WithService>
      </div>
      <video
        preload='none'
        type='video/mp4'
        poster={placeholder}
        playsInline
        className='map-video'
        src={mapVideo}
        autoPlay
        muted
        loop
      ></video>
    </div>
  );
}

export default RelationalMap;
