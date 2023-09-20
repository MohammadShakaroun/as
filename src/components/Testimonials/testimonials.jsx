import React from "react";
import "./testimonials.css";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const variantsChild = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

const testimonial = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export const Testimonials = props => {

  return (
    <motion.div variants={variants} initial="hidden" animate={'show'} id="testimonials">
      <motion.div className="container">
        <div className="section-title text-center">
          <h2>What our clients say</h2>
        </div>
        <motion.div variants={variantsChild} className="row">
          {props?.data
            ? props?.data?.map((d, i) => (
                <motion.div
                  variants={testimonial}
                  whileHover={{scale: 1.02, transition: {duration: .2}}}
                  key={`${d.name}-${i}`}
                  className="col-md-4"
                >
                  <div className="testimonial">
                    <div className="testimonial-image">
                      {" "}
                      <img src={d.img} className="feedbackImg" alt="" />{" "}
                    </div>
                    <div className="testimonial-content">
                      <p className="feedback">{d.text}</p>
                      <div className="testimonial-meta"> - {d.name} </div>
                    </div>
                  </div>
                </motion.div>
              ))
            : "loading"}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
