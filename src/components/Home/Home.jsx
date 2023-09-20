import React, { useEffect, useState } from "react";
import "./home.css";
import { HeaderTitle } from "../components/headerTitle/headerTitle";
import Carousel from "../components/carousel/carousel";
import { WithService } from "../highOrderComponents/withService";
import { motion } from "framer-motion";
import Contact from "../../lottieFiles/Contact-us.json";
import { useTranslation } from "react-i18next";
import { HomeTitle } from "../components/homeTitle/homeTitle";
import { Blob } from "../components/blob/blob";
import { Counters } from "../components/counters/counters";
import { MainVideo } from "../components/mainVideo/mainVideo";
import RelationalMap from "../components/relationalMap/relationaMap";
import WebLoader from "../components/webLoader/webLoader";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";

const handleScroll = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const Home = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      {!isLoading ? (
        <motion.div id="content" className="home-page--section">
          <MainVideo />
          <HomeTitle data={props} />
          <div className="home-page--inner">
            <div className="home-section--padding">
              <HeaderTitle
                blackText={t('PARTNERS_1')}
                blueText={t('PARTNERS_2')}
              />
              <div style={{ margin: "50px 0" }}>
                <Carousel right={1} />
              </div>
            </div>
            <div style={{ width: "100%", height: "100vh" }}>
              <RelationalMap />
            </div>

            <div
              className="home-section--padding"
              style={{ backgroundColor: "#f0f0f0" }}
            >
              <HeaderTitle
                blackText={t('OUR_RESULTS_1')}
                blueText={t('OUR_RESULTS_2')}
              />
              <Counters />
            </div>
            <div className="home-section--padding">
              <HeaderTitle blackText={t('CHOOSE_US_1')} blueText={t('CHOOSE_US_2')} />
              <Blob />
            </div>
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
                  style={{ height: "300px", width: "100%" }}
                  animationData={Contact}
                />
              </motion.div>
            </WithService>
            <WithService initialX={"100vw"} visibleX={0} width={"100%"}>
              <motion.div className="service_info_container">
                <motion.div className="service_paragraph">
                {t('CONTACT_PARAGRAPH')}
                </motion.div>
                <Link to="/contact" onClick={handleScroll}>
                  <motion.div className="service_started--btn" id="Subscribe">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                      ></path>
                    </svg>
                    <span>{t('CONTACT_HOME')}</span>
                  </motion.div>
                </Link>
              </motion.div>
            </WithService>
          </div>
        </motion.div>
      ) : (
        <WebLoader />
      )}
    </div>
  );
};
