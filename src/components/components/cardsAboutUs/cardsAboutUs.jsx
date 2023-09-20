import React from "react";
import "./cardsAboutUs.css";
import lotieFast from "../../../lottieFiles/fast-data.json";
import lotieReliable from "../../../lottieFiles/reliable.json";
import lotieCost from "../../../lottieFiles/low-cost.json";
import { useTranslation } from "react-i18next";
import Lottie from "lottie-react";

function CultureAboutUs(props) {
  const { t } = useTranslation();
  return (
      /* About Us Page for the culture section. */
      <div className="second addcol-xs-6 col-md-3">
        <div className="myCard">
          <div className="innerCard">
            <div className="frontSide">
              <Lottie
                style={{ height: "75%", width: "75%" }}
                animationData={lotieFast}
              />
              <div>
                <p className="titleCulture">{t("FAST_MESSAGE_TITLE")}</p>
              </div>
            </div>
            <div className="backSide">
              <p className="titleCulture">{t("FAST_MESSAGE_TITLE")}</p>
              <p className="textCulture">
              {t("TEXT_FAST_MESSAGE")}            
              </p>
            </div>
          </div>
        </div>
        <div className="myCard">
          <div className="innerCard">
            <div className="frontSide">
              <Lottie
                style={{ height: "75%", width: "75%" }}
                animationData={lotieReliable}
              />
              <div>
                <p className="titleCulture">{t("RELIABLE_TITLE")}</p>
              </div>
            </div>
            <div className="backSide">
              <p className="titleCulture">{t("RELIABLE_TITLE")}</p>
              <p className="textCulture">
              {t("TEXT_RELIABLE")}          
              </p>
            </div>
          </div>
        </div>
        <div className="myCard">
          <div className="innerCard">
            <div className="frontSide">
              <Lottie
                style={{ height: "75%", width: "75%" }}
                animationData={lotieCost}
              />
              <div>
                <p className="titleCulture">{t("DELIVERY_COST_TITLE")}</p>
              </div>
            </div>
            <div className="backSide">
              <p className="titleCulture">{t("DELIVERY_COST_TITLE")}</p>
              <p className="textCulture">
              {t("DELIVERY_COST_TEXT")}
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default CultureAboutUs;
