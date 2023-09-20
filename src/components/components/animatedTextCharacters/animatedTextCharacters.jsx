import React from "react";
import { motion } from "framer-motion";

export const AnimatedTextCharacters = ({ text, style }) => {
  const letters = Array.from(text);
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: 2,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: 2,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
      variants={container}
      initial={"hidden"}
      animate={"visible"}
    >
      {letters.map((letter, index) =>
        letter === "-" ? (
          <motion.span variants={child} style={style} key={index}>
            {' '}
          </motion.span>
        ) : (
          <motion.span variants={child} style={style} key={index}>
            {letter}
          </motion.span>
        )
      )}
    </motion.div>
  );
};
