import React, { useRef, useState } from "react";
import "./footers.css";
import { ServiceDividerBottom } from "../components/servicedivider/serviceDividerBottom";
import { SocialLinks } from "../components/socialLinks/socialLinks";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

function Footers(props) {
  const formRef = useRef(null);
  const [success, setSuccess] = useState("");
  const sendEmail = e => {
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
          e.target.reset();
          setSuccess(true);
        },
        error => {}
      );
  };

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const { t } = useTranslation();
  return (
    <div style={{ overflow: "hidden" }}>
      <div className="footer-wave">
        <ServiceDividerBottom />
      </div>
      <div className="footer-container">
        <div className="footer-links">
          <div className="footer-links--links">
            <div className="footer-links--col">
              <span className="footer-links--title">{t("QUICK_LINKS")}</span>
              <span className="footer-links--link">
                <Link onClick={handleScroll} to="/home">
                  {t("F_HOME")}
                </Link>
              </span>
              <span className="footer-links--link">
                <Link onClick={handleScroll} to="/about">
                  {t("F_ABOUT")}
                </Link>
              </span>
              <span className="footer-links--link">
                <Link onClick={handleScroll} to="/services">
                  {t("F_SERVICES")}
                </Link>
              </span>
              <span className="footer-links--link">
                <Link onClick={handleScroll} to="/contact">
                  {t("F_CONTACT")}
                </Link>
              </span>
              <span className="footer-links--link">
                <Link onClick={handleScroll} to="/register ">
                  {t("REGISTER")}
                </Link>
              </span>
            </div>
          </div>
          <div className="footer-links--newsletter">
            <div className="footer-newsletter--title">
              {t("NEWS_LETTER_TITLE")}
            </div>
            <div className="footer-newsletter--text">
              {t("NEWS_LETTER_TEXT")}
            </div>
            <div className="footer-newsletter--inputcontainer">
              <form onSubmit={sendEmail} ref={formRef} className="footer-newsletter--input">
                <input
                  placeholder="Email address"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
                <button id="Subscribe" type="submit">
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
                  <span>{t("GET_STARTED")}</span>
                </button>
              </form>
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
            </div>
          </div>
        </div>
        <div className="footer-coyeright">
          <div className="footer-copyright--text">{t("COPYRIGHT")}</div>
          <div className="footer-social--links">
            <SocialLinks data={props.data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footers;
