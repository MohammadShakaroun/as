import React from "react";
import "./about.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { WithService } from "../highOrderComponents/withService";
import { HeaderTitle } from "../components/headerTitle/headerTitle";
import introLottie from "../../lottieFiles/intro.json";
import MessageAboutHeader from "../../lottieFiles/aboutHeader/message5.json";
import InnoAboutHeader from "../../lottieFiles/aboutHeader/innovationAbout.json";
import Career from "../../lottieFiles/servicesLottie/carrer.json";
import Cards from "../components/cardsAboutUs/cardsAboutUs";
import { FlagsContainer } from "../flagsContainer/flagsContainer";
import { useTranslation } from "react-i18next";

import Lottie from "lottie-react";
import { CultureCards } from "../cultureCards/cultureCards";
// go 
export const About = (props) => {
  const { t } = useTranslation();
  return (
    <section id="aboutpage">
      <HeaderTitle blackText={t("ABOUT_1")} blueText={t("ABOUT_2")} />
      <div className="about-intro--container">
        <div className="about-intro--icon">
          <Lottie
            style={{ width: "100%", height: "90%" }}
            animationData={introLottie}
          />
        </div>
        <div className="about-intro--text">{t("ABOUT_PARAGRAPH_1")}</div>
      </div>
      <div className="about-intro--container reverse">
        <div className="about-intro--icon">
          <Lottie
            style={{ width: "100%", height: "90%" }}
            animationData={InnoAboutHeader}
          />
        </div>
        <div className="about-intro--text">
          <p>{t("ABOUT_PARAGRAPH_2")}.</p>
          <p>{t("ABOUT_PARAGRAPH_3")}.</p>
        </div>
      </div>
      <div className="about-intro--container">
        <div className="about-intro--icon">
          <Lottie
            style={{ width: "100%", height: "90%" }}
            animationData={MessageAboutHeader}
          />
        </div>
        <div className="about-intro--text">
          <p>{t("ABOUT_PARAGRAPH_4")}.</p>
          <p>{t("ABOUT_PARAGRAPH_5")}.</p>
        </div>
      </div>
      <HeaderTitle blackText={t("HEAD_CARD_1")} blueText={t("HEAD_CARD_2")} />
      <Cards />
      <CultureCards />
      
      <FlagsContainer />
      <HeaderTitle blueText={t('CAREER_TITLE')} />
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
              animationData={Career}
            />
          </motion.div>
        </WithService>
        <WithService initialX={"100vw"} visibleX={0} width={"100%"}>
          <motion.div className="service_info_container">
            <motion.div className="service_paragraph">
            {t('ELEVATE_CAREER')}
            </motion.div>
            <Link to="mailto:info@aetelco.com">
              <button className="btn">{t('CAREER_BTN')}</button>
            </Link>
          </motion.div>
        </WithService>
      </div>
    </section>
  );
};
