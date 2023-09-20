import React from "react";
import "./carousel.css";
import BankOfTelecom from "../../../assets/images/partners/bank_telecom.png";
import BroadNet from "../../../assets/images/partners/broad_band.png";
import BSG from "../../../assets/images/partners/bsg_bsg.png";
import Infobip from "../../../assets/images/partners/info_bip.png";
import Lexico from "../../../assets/images/partners/lexico_telecom.png";
import Metto from "../../../assets/images/partners/mi_tto.png";
import MontyMobile from "../../../assets/images/partners/monty_mobile.png";
import Paasso from "../../../assets/images/partners/paa_sso.png";
import Skyline from "../../../assets/images/partners/sky_line.png";

function Carousel() {
  return (
    <section>
      <div className="slider">
        <div className="slide-track">
          <div className="slide " aria-hidden="true">
            <img
              src={BankOfTelecom}
              alt="Bank Of Telecom"
              width="100%"
              height="100%"
            />
          </div>
          <div className="slide" aria-hidden="true">
            <img
              src={MontyMobile}
              alt="Monty Mobile logo"
              width="125%"
              height="100%"
            />
          </div>
          <div className="slide" aria-hidden="true">
            <img src={BroadNet} alt="Broad Net" width="100%" height="100%" />
          </div>
          <div className="slide" aria-hidden="true">
            <img src={BSG} alt="BSG logo" width="100%" height="100%" />
          </div>
          <div className="slide" aria-hidden="true">
            <img src={Infobip} alt="Infobip logo" width="100%" height="100%" />
          </div>
          <div className="slide" aria-hidden="true">
            <img src={Lexico} alt="Lexico logo" width="130%" height="100%" />
          </div>
          <div className="slide" aria-hidden="true">
            <img src={Skyline} alt="Skyline logo" width="100%" height="100%" />
          </div>
          <div className="slide" aria-hidden="true">
            <img src={Paasso} alt="Paasso logo" width="100%" height="100%" />
          </div>
          <div className="slide" aria-hidden="true">
            <img src={Metto} alt="Netto logo" width="100%" height="100%" />
          </div>
          {/* 2nd carou  */}
          <div className="slide " aria-hidden="true">
            <img
              src={BankOfTelecom}
              alt="Bank Of Telecom"
              width="100%"
              height="100%"
            />
          </div>
          <div className="slide" aria-hidden="true">
            <img
              src={MontyMobile}
              alt="Monty Mobile logo"
              width="125%"
              height="100%"
            />
          </div>
          <div className="slide " aria-hidden="true">
            <img src={BroadNet} alt="" width="100%" height="100%" />
          </div>
          <div className="slide " aria-hidden="true">
            <img src={Infobip} alt="" width="100%" height="100%" />
          </div>
          <div className="slide" aria-hidden="true">
            <img src={BSG} alt="BSG logo" width="100%" height="100%" />
          </div>
          <div className="slide" aria-hidden="true">
            <img src={Lexico} alt="Lexico logo" width="130%" height="100%" />
          </div>
          <div className="slide" aria-hidden="true">
            <img src={Skyline} alt="Skyline logo" width="100%" height="100%" />
          </div>
          <div className="slide" aria-hidden="true">
            <img src={Paasso} alt="Paasso logo" width="100%" height="100%" />
          </div>
          <div className="slide" aria-hidden="true">
            <img src={Metto} alt="Netto logo" width="100%" height="100%" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
