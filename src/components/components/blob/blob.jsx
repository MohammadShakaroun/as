import React from "react";
import "./blob.css";
import Integration from "../../../assets/images/integration.png";
import Sclabale from "../../../assets/images/scalability.png";
import Advanced from "../../../assets/images/Advanced.png";
import Extensive from "../../../assets/images/extensive.png";
import SecureMessage from "../../../assets/images/secureMessage.png";
import Support from "../../../assets/images/Support.png";
import { WithService } from "../../highOrderComponents/withService";
import { useTranslation } from "react-i18next";

export const Blob = () => {
  const { t } = useTranslation();
  return (
    <div className='blobs-container--row'>
      <WithService initialX={"100vw"} visibleX={0} duration={0.5} delay={0.2}>
        <div className='square linkedin'>
          <span></span>
          <span></span>
          <span></span>
          <div className='content'>
            <img className='icon--blob' src={SecureMessage} alt='' />
            <p>{t("RELIABLE_MESSAGE")}</p>
          </div>
        </div>
      </WithService>
      <WithService initialX={"100vw"} visibleX={0} duration={0.5} delay={0.4}>
        <div className='square twitter'>
          <span></span>
          <span></span>
          <span></span>
          <div className='content'>
            <img className='icon--blob' src={Extensive} alt='' />
            <p>{t("EXTENSIVE")}</p>
          </div>
        </div>
      </WithService>
      <WithService initialX={"100vw"} visibleX={0} duration={0.5} delay={0.6}>
        <div className='square github'>
          <span></span>
          <span></span>
          <span></span>
          <div className='content'>
            <img className='icon--blob' src={Sclabale} alt='' />
            <p>{t("SCALABLE")}</p>
          </div>
        </div>
      </WithService>
      <WithService initialX={"-100vw"} visibleX={0} duration={0.5} delay={0.6}>
        <div className='square github'>
          <span></span>
          <span></span>
          <span></span>
          <div className='content'>
            <img className='icon--blob' src={Integration} alt='' />
            <p>{t("POWERFUL")}</p>
          </div>
        </div>
      </WithService>
      <WithService initialX={"-100vw"} visibleX={0} duration={0.5} delay={0.4}>
        <div className='square github'>
          <span></span>
          <span></span>
          <span></span>
          <div className='content'>
            <img className='icon--blob' src={Advanced} alt='' />
            <p>{t("ADVANCED_REPORT")}</p>
          </div>
        </div>
      </WithService>
      <WithService initialX={"-100vw"} visibleX={0} duration={0.5} delay={0.2}>
        <div className='square github'>
          <span></span>
          <span></span>
          <span></span>
          <div className='content'>
            <img className='icon--blob' src={Support} alt='' />
            <p>{t("DEDICTED_SUPPORT")}</p>
          </div>
        </div>
      </WithService>
    </div>
  );
};
