import React from "react";
import { motion } from "framer-motion";
import "./socialLinks.css";

const variants = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export const SocialLinks = props => {
  return (
    <div className="social">
      <ul>
        <motion.li
          variants={variants}
          initial={"hidden"}
          animate={"visible"}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <a href={props.data ? props.data.facebook : "/"}>
            <i className="fa fa-facebook"></i>
          </a>
        </motion.li>
        <motion.li
          variants={variants}
          initial={"hidden"}
          animate={"visible"}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <a href="https://www.linkedin.com/company/ae-telco-ltd">
            <i className="fa fa-linkedin"></i>
          </a>
        </motion.li>
        <motion.li
          variants={variants}
          initial={"hidden"}
          animate={"visible"}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <a href={props.data ? props.data.youtube : "/"}>
            <i className="fa fa-youtube"></i>
          </a>
        </motion.li>
        <motion.li
          variants={variants}
          initial={"hidden"}
          animate={"visible"}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <a href={props.data ? props.data.instagram : "/"}>
            <i className="fa fa-instagram"></i>
          </a>
        </motion.li>
      </ul>
    </div>
  );
};
