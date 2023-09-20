import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import "./contact.css";
import mail from "../../assets/images/email.png";
import locationIcon from "../../assets/images/location.png";
import phoneIcon from "../../assets/images/phone.png";
import kiteIcon from "../../assets/images/letter.png";
import { SocialLinks } from "../components/socialLinks/socialLinks";
import { useTranslation } from "react-i18next";

export const Contact = props => {
  const formRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { t } = useTranslation();

  const sendEmail = e => {
    setIsLoading(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3gonk98",
        "template_o0hagki",
        formRef.current,
        "T6VixHMwOSJpD414u"
      )
      .then(
        result => {
          console.log(result);
          e.target.reset();
          setSuccess(true);
        },
        error => {
          console.log(error.text);
        }
      )
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="contact-form--section">
      <div className="contact-form--container">
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 30 }}
          className="contact-form--infocontainer"
        >
          <motion.div
            animate={{
              x: [-30, 30, 30, 30, -30, -30, -30, -30, -30, -30],
              y: [-30, 30, 30, 30, -30, -30, -30, -30, -30, -30],
              scale: [1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1],
              opacity: [0.2, 0.2, 0.1, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.2],
              borderRadius: ["50%", "50%", "50%", "50%", "50%"],
            }}
            transition={{ duration: 4, repeat: Infinity, easing: "ease" }}
            className="circle-small"
          ></motion.div>
          <motion.div
            initial={{ x: "-100vw", y: "-100vh" }}
            animate={{
              x: [30, -30, -30, -30, 30, 30, 30, 30, 30, 30],
              y: [30, -30, -30, -30, 30, 30, 30, 30, 30, 30],
              scale: [2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
              opacity: [0.1, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.2, 0.1, 0.1],
              borderRadius: ["50%", "50%", "50%", "50%", "50%"],
            }}
            transition={{ duration: 4, repeat: Infinity, easing: "ease" }}
            className="circle-big"
          ></motion.div>
          <motion.div className="contact-info--title">
            {t("GET_TITLE")}
          </motion.div>
          <div className="contact-info--text">{t("GET_TEXT")}</div>
          <div className="contact-info--contactdetails">
            <div className="contact-info--detail">
              <img className="contact-info--icon" src={phoneIcon} alt="" />
              <a href="tel:+44 20 3908 0032">+44 20 3908 0032</a>
            </div>
            <div className="contact-info--detail">
              <img className="contact-info--icon" src={mail} alt="" />
              <a href="mailto:info@aetelco.com">info@aetelco.com</a>
            </div>
            <div className="contact-info--detail">
              <img className="contact-info--icon" src={locationIcon} alt="" />
              <span>71 - 75 Shelton Street - Convent Garden - London</span>
            </div>
          </div>
          <div className="contact-info--socials">
            <SocialLinks />
          </div>
        </motion.div>
        <div className="contact-form--inputs">
          <motion.div
            initial={{ y: "-100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              type: "spring",
              bounce: true,
              stiffness: 30,
            }}
            className="contact-form--title"
          >
            {t("CONTACT_TITLE")}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              type: "spring",
              bounce: true,
              stiffness: 30,
            }}
            className="contact-form--text"
          >
            {t("CONTACT_TEXT")}
          </motion.div>
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="contact-form--form"
          >
            <div className="contact-form--input">
              <label htmlFor="user_name">{t("CONTACT_FULLNAME")}</label>
              <input type="text" name="user_name" id="user_name" required />
            </div>
            <div className="contact-form--input">
              <label htmlFor="email">{t("CONTACT_EMAIL")}</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="contact-form--input">
              <label htmlFor="message">{t("CONTACT_MESSAGE")}</label>
              <input type="text" name="message" id="message" />
            </div>
            {success && (
              <div
                style={{
                  textAlign: "start",
                  margin: "10px 0",
                  backgroundColor: "green",
                  color: "white",
                  padding: "10px",
                  borderRadius: 5,
                }}
              >
                Thank you for contacting us we will get back to you as soon as
                possible !
              </div>
            )}
            <button
              disabled={isLoading}
              className="contact-form--btn"
              type="submit"
            >
              {isLoading ? "Sending Message..." : t("SEND_MESSAGE")}
              <motion.div
                initial={{ y: "100vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  bounce: true,
                  stiffness: 30,
                }}
                className="kite-container"
              >
                <img className="kite-icon" src={kiteIcon} alt="" />
              </motion.div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
