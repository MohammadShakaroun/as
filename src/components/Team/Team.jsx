import React from "react";
import "./team.css";
import { motion } from "framer-motion";
// import Swiper from "../components/swiperTeam/swiperTeam";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
    },
  },
};

const team = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x:0,
    transition: {
      duration: .8,
    },
  },
};

export const Team = props => {
  return (
    <motion.div variants={variants} initial={'hidden'} animate={'show'} id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <p className="teamParagraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        
        <motion.div variants={variants} initial={'hidden'} animate={'show'} id="row">
          {props.data
            ? props.data.map((d, i) => (
                <motion.div whileHover={{scale: 1.03, transition: {duration: .3}}} variants={team} key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p className="teamjob">{d.job}</p>
                    </div>
                  </div>
                </motion.div>
              ))
            : "loading"}
        </motion.div>
      </div>
      {/* <Swiper /> */}
    </motion.div>
  );
};
