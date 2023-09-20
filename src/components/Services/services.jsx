import "./services.css";
import lotie from "../../lottieFiles/72842-icon-2-chat.json";
import Lottie from "lottie-react";
import GetStarted from "../../lottieFiles/servicesLottie/Service-SMS.json";

import appIcon from "../../lottieFiles/servicesLottie/appointment.json";
import transIcon from "../../lottieFiles/servicesLottie/transaction.json";
import promoIcon from "../../lottieFiles/servicesLottie/promotional.json";
import otpIcon from "../../lottieFiles/servicesLottie/verification-code.json";
import deliveryIcon from "../../lottieFiles/servicesLottie/delivery-animation.json";
import surveyIcon from "../../lottieFiles/servicesLottie/customer-survey.json";
import emergencyIcon from "../../lottieFiles/servicesLottie/emergency.json";
import eventIcon from "../../lottieFiles/servicesLottie/event.json";

import rateIcon from "../../lottieFiles/AdvantagesLottie/Highrates.json";
import wifiIcon from "../../lottieFiles/AdvantagesLottie/no-wifi.json";
import reachIcon from "../../lottieFiles/AdvantagesLottie/world-wide.json";
import truckIcon from "../../lottieFiles/AdvantagesLottie/Instant-Delivery.json";
import handshakeIcon from "../../lottieFiles/AdvantagesLottie/customer-engagement.json";
import profitIcon from "../../lottieFiles/AdvantagesLottie/cost-Effective.json";
import safeIcon from "../../lottieFiles/AdvantagesLottie/reliability-true.json";
import versatileIcon from "../../lottieFiles/AdvantagesLottie/versatility.json";

import { WithService } from "../highOrderComponents/withService";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { HeaderTitle } from "../components/headerTitle/headerTitle";
import { CustomCard } from "../components/customCard/customCard";
import { useTranslation } from "react-i18next";

const useCases = [
  {
    icon: appIcon,
    name: "APPOINTMENT_TITLE",
    description: "APPOINTMENT_TEXT",
  },
  {
    icon: transIcon,
    name: "TRANSACTION_TITLE",
    description: "TRANSACTION_TEXT",
  },
  {
    icon: otpIcon,
    name: "VERIFICATION_TITLE",
    description: "VERIFICATION_TEXT",
  },
  {
    icon: promoIcon,
    name: "PROMOTIONAL_TITLE",
    description: "PROMOTIONAL_TEXT",
  },
  {
    icon: deliveryIcon,
    name: "DELIVERY_TITLE",
    description: "DELIVERY_TEXT",
  },
  {
    icon: surveyIcon,
    name: "SURVEYS_TITLE",
    description: "SURVEYS_TEXT",
  },
  {
    icon: emergencyIcon,
    name: "EMERGENCY_TITLE",
    description: "EMERGENCY_TEXT",
  },
  {
    icon: eventIcon,
    name: "EVENT_TITLE",
    description: "EVENT_TEXT",
  },
];

const advantages = [
  {
    icon: rateIcon,
    name: "HIGH_OPEN_TITLE",
    description: "HIGH_OPEN_TEXT",
  },
  {
    icon: reachIcon,
    name: "WIDE_TITLE",
    description: "WIDE_TEXT",
  },
  {
    icon: truckIcon,
    name: "INSTANT_TITLE",
    description: "INSTANT_TEXT",
  },
  {
    icon: wifiIcon,
    name: "INTERNET_TITLE",
    description: "INTERNET_TEXT",
  },
  {
    icon: handshakeIcon,
    name: "ENGAGE_TITLE",
    description: "ENGAGE_TEXT",
  },
  {
    icon: profitIcon,
    name: "COST_TITLE",
    description: "COST_TEXT",
  },
  {
    icon: safeIcon,
    name: "RELIABILITY_TITLE",
    description: "RELIABILITY_TEXT",
  },
  {
    icon: versatileIcon,
    name: "VERSA_TITLE",
    description: "VEERSA_TEXT",
  },
];

const handleScroll = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const Services = (props) => {
  const { t } = useTranslation();
  return (
    <motion.div className="services_container" style={{ position: "relative" }}>
      <motion.div style={{ width: "100%", marginTop: "50px" }}>
        <HeaderTitle
          blueText={t("OUR_SERVICES_2")}
          blackText={t("OUR_SERVICES_1")}
        />
        <div className="service_section">
          <WithService
            initialX={"-100vw"}
            visibleX={0}
            duration={0.8}
            delay={0.1}
            width={"100%"}
          >
            <motion.div className="service_animation">
              <Lottie
                style={{ height: "300px", width: "100%" }}
                animationData={lotie}
              />
            </motion.div>
          </WithService>
          <WithService initialX={"100vw"} visibleX={0} width={"100%"}>
            <motion.div className="service_info_container">
              <motion.div className="service_title">
                {t("A2P_SMS_TITLE")}
              </motion.div>
              <motion.div className="service_paragraph">
                {t("A2P_SMS_TEXT")}
              </motion.div>
            </motion.div>
          </WithService>
        </div>
      </motion.div>
      <div style={{ margin: "4rem 0", width: "100%" }}>
        <HeaderTitle
          blackText={t("WHY_A2P_TITLE_1")}
          blueText={t("WHY_A2P_TITLE_2")}
        />
        <div className="service-use--section">
          {useCases?.map((item, i) => (
            <WithService
              key={i}
              initialX={"100vw"}
              duration={0.3}
              delay={0.1 * i}
              visibleX={0}
            >
              <CustomCard
                name={t(item?.name)}
                description={t(item?.description)}
                icon={item?.icon}
              />
            </WithService>
          ))}
        </div>
      </div>

      <div style={{ margin: "4rem 0", width: "100%" }}>
        <HeaderTitle
          blackText={t("ADVANTAGES_TITLE_1")}
          blueText={t("ADVANTAGES_TITLE_2")}
        />
        <div className="service-advantage--section">
          {advantages?.map((item, i) => (
            <WithService
              key={i}
              initialX={"100vw"}
              duration={0.3}
              delay={0.1 * i}
              visibleX={0}
            >
              <CustomCard
                name={t(item?.name)}
                description={t(item?.description)}
                icon={item?.icon}
              />
            </WithService>
          ))}
        </div>
        <div className="service_section">
          <WithService
            initialX={"-100vw"}
            visibleX={0}
            duration={0.8}
            delay={0.1}
            width={"100%"}
          >
            <motion.div className="service_animation">
              <Lottie
                style={{ height: "200px", width: "80%" }}
                animationData={GetStarted}
              />
            </motion.div>
          </WithService>
          <WithService initialX={"100vw"} visibleX={0} width={"100%"}>
            <motion.div className="service_info_container">
              <motion.div className="service_paragraph">
                {t("GET_STARTED_SERVICE")}
              </motion.div>
              <br />
              <Link to="/register" onClick={handleScroll}>
                <button className="btn">{t("GET_STARTED")}</button>
              </Link>
            </motion.div>
          </WithService>
        </div>
      </div>
    </motion.div>
  );
};
