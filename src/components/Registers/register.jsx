import React, { useRef, useState } from "react";
import "./register.css";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { ClientsSlider } from "../components/clientsSlider/clientsSlider";
import { useTranslation } from "react-i18next";

const feedbacks = [
  {
    desc: "Marketing Manager",
    name: "Sarah",
    message:
      "Game-changer for our business! High delivery rates, real-time analytics, and personalized messaging. Highly recommended!.",
  },
  {
    desc: "Small business owner",
    name: "David",
    message:
      "Intuitive interface, efficient bulk messaging, and time saving. A must-have tool!",
  },
  {
    desc: "Online shop owner",
    name: "Emily",
    message:
      "Enhanced customer service, timely notifications, seamless integration. Impressed!",
  },
];

export const Register = () => {
  const [accountType, setAccountType] = useState("Panel");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef(null);
  const { t } = useTranslation();

  const handleOnChange = e => {
    setAccountType(e.target.value);
  };

  const sendEmail = e => {
    e.preventDefault();
    setErrorMessage("");
    if (formRef.current.accountType.value === "") {
      setErrorMessage("Please select account type");
      return;
    }
    setIsLoading(true);
    setSuccess(false);

    emailjs
      .sendForm(
        "service_2x39wcu",
        "template_rf55e38",
        formRef.current,
        "6Yv4upAxHELmZeuHI"
      )
      .then(
        result => {
          console.log(result);
          e.target.reset();
          setSuccess(true);
        },
        error => {
          setErrorMessage(error.text)
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
          style={{ justifyContent: "center", gap: "8rem" }}
        >
          <motion.div className="contact-info--title">
            {t("REGISTER_TITLE")}
          </motion.div>
          <div className="contact-info--text">{t("REGISTER_TEXT")}</div>
          <div>
            <ClientsSlider slides={feedbacks} />
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
            {t("REGISTER_FORM")}
          </motion.div>

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="contact-form--form"
          >
            <div className="contact-form--input">
              <label htmlFor="full_name">{t("CONTACT_FULLNAME")}</label>
              <input type="text" name="full_name" id="full_name" required />
            </div>
            <div className="contact-form--input">
              <label htmlFor="email">{t("CONTACT_EMAIL")}</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="contact-form--input">
              <label htmlFor="password">{t("PASSWORD")}</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div className="contact-form--input">
              <label htmlFor="phone_number">{t("PHONE")} (optional)</label>
              <input type="tel" name="phone_number" id="phone_number" />
            </div>
            <div className="contact-form--input">
              <label htmlFor="type">{t("ACC_TYPE_1")}</label>
              <fieldset className="radio_container" required>
                <div className="radio_row">
                  <input
                    onChange={e => handleOnChange(e)}
                    type="radio"
                    value={"SMPP"}
                    id="smpp"
                    name="accountType"
                  />
                  <label htmlFor="smpp">SMPP</label>
                </div>
                <div className="radio_row">
                  <input
                    onChange={e => handleOnChange(e)}
                    type="radio"
                    value={"API"}
                    id="api"
                    name="accountType"
                  />
                  <label htmlFor="api">API</label>
                </div>
                <div className="radio_row">
                  <input
                    onChange={e => handleOnChange(e)}
                    type="radio"
                    id="panel"
                    value={"Panel"}
                    name="accountType"
                    defaultChecked
                  />
                  <label htmlFor="panel">{t("PLATFORM_WORD")}</label>
                </div>
              </fieldset>
            </div>
            {(accountType === "SMPP" || accountType === "API") && (
              <div className="contact-form--input">
                <label htmlFor="ip_address">{t("ACC_TYPE_2")}</label>
                <input type="text" name="ip_address" id="ip_address" required />
              </div>
            )}
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
                Thank you for registering your account, we will contact you soon
                for more information.
              </div>
            )}
             {errorMessage && (
              <div
                style={{
                  textAlign: "start",
                  margin: "10px 0",
                  backgroundColor: "tomato",
                  color: "white",
                  padding: "10px",
                  borderRadius: 5,
                }}
              >
                {errorMessage}
              </div>
            )}
            <button
              disabled={isLoading}
              className="contact-form--btn"
              type="submit"
            >
              {isLoading ? "Signing up..." : t("REGISTER_BTN")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


