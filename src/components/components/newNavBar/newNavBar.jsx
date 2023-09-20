import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Globe from "../../../assets/images/new_logo.png";
import "./newNavBar.css";
import { FiMenu } from "react-icons/fi";
import LangSwitch from "../langSwitch/langSwitch";
import { useTranslation } from "react-i18next";
import { FaTimes } from "react-icons/fa";

const NewNavBar = () => {
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const navRef = useRef();
  const { t } = useTranslation();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="nav_bar--container">
      <div className="nav_logo--section">
        <Link className="nav_logo--row" to={"/home"}>
          <div className="nav_logo--container">
            <img className="nav_logo--image" src={Globe} alt=""></img>
          </div>
          <div className="nav_logo_text--container">
            <span>AE</span>
            <span>TELCO</span>
          </div>
        </Link>
      </div>
      <div className="nav_right--section">
        <nav className="nav_right--container" ref={navRef}>
          <Link onClick={showNavbar} to={"/home"}>
            <span>{t("HOME")}</span>
          </Link>

          <Link
            onMouseEnter={() => setCompanyDropdownOpen(true)}
            onMouseLeave={() => setCompanyDropdownOpen(false)}
            onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)}
            to="/about"
          >
            <span>{t("COMPANY")} </span>
            {companyDropdownOpen && (
              <div className="nav_company--container">
                <Link showNavbar onClick={showNavbar} to={"/about"}>
                  <span>{t("ABOUT")}</span>
                </Link>
                {/* <Link showNavbar onClick={showNavbar} to={"/faq"}>
                  <span>{t("FAQ")}</span>
                </Link> */}
              </div>
            )}
          </Link>
          <Link onClick={showNavbar} to={"/services"}>
            <span>{t("SERVICES")}</span>
          </Link>
          <Link onClick={showNavbar} to={"/contact"}>
            <span>{t("CONTACT_US")}</span>
          </Link>
          <Link onClick={showNavbar} to={"/register"}>
            <span className="nav_register--btn">{t("REGISTER")}</span>
          </Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FiMenu />
        </button>
        <div style={{ position: "relative" }}>
          <LangSwitch />
        </div>
      </div>
    </header>
  );
};

export default NewNavBar;
