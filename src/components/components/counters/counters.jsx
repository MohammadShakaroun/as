import React from "react";
import happyCustomers from "../../../lottieFiles/happyCustomers.json";
import Partners from "../../../lottieFiles/partnersTrusted.json";
import MessagesTerminate from "../../../lottieFiles/messaagesTerminate.json";
import Country from "../../../lottieFiles/Countries-covered.json"
import Years from "../../../lottieFiles/5yearsexperience.json"
import "./counters.css";
import { Counter } from "./counter";
import { motion } from "framer-motion";
import { WithService } from "../../highOrderComponents/withService";
import { useTranslation } from "react-i18next";
import Lottie from "lottie-react";

export const Counters = () => {
  const { t } = useTranslation();
  return (
    <div className="counter-section--container">
      <WithService initialX={"100vw"} visibleX={0} duration={.5} delay={0.2}>
        <motion.div className="counter--container">
          <Lottie animationData={happyCustomers} className="counter--icon" />
          <Counter number={2000} type={"+"} />
          <div className="counter--text">
           {t('CUSTOMER')}
          </div>
        </motion.div>
      </WithService>
      <WithService initialX={"100vw"} visibleX={0} duration={.5} delay={0.5}>
        <div className="counter--container">
          <Lottie animationData={Partners} className="counter--icon" />
          <Counter number={100} type={"+"} />
          <div className="counter--text">
            {t('PARTNERS')} 
          </div>
        </div>
      </WithService>
      <WithService initialX={"100vw"} visibleX={0} duration={.5} delay={.8}>
        <div className="counter--container">
          <Lottie animationData={MessagesTerminate} className="counter--icon" />
          <Counter number={500} type={"M+"} />
          <div className="counter--text">
          {t('MESSAGE_TERMINATE')}
          </div>
        </div>
      </WithService>
      <WithService initialX={"100vw"} visibleX={0} duration={.5} delay={1.1}>
        <motion.div className="counter--container">
          <Lottie animationData={Country} className="counter--icon" />
          <Counter number={150} type={"+"} />
          <div className="counter--text">
          {t('COUNTRIES')}
          </div>
        </motion.div>
      </WithService>
      <WithService initialX={"100vw"} visibleX={0} duration={.5} delay={1.4}>
        <motion.div className="counter--container">
          <Lottie animationData={Years} className="counter--icon" />
          <Counter number={5} type={"+"} />
          <div className="counter--text">
          {t('YEARS')}
          </div>
        </motion.div>
      </WithService>
    </div>
  );
};
