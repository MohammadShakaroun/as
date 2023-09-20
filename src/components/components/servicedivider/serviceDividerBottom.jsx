import React, { useEffect } from "react";
import "./servicedivider.css";
import waveBack from "../../../assets/images/wave.png";

const waves = [
  {
    id: 1,
    name: "Wave_1",
  },
  {
    id: 2,
    name: "Wave_2",
  },
  {
    id: 3,
    name: "Wave_3",
  },
  {
    id: 4,
    name: "Wave_4",
  },
];

export const ServiceDividerBottom = () => {
  useEffect(() => {
    const wave1 = document.getElementById("Wave_1");
    const wave2 = document.getElementById("Wave_2");
    const wave3 = document.getElementById("Wave_3");
    const wave4 = document.getElementById("Wave_4");

    const handleScroll = () => {
      let value = window.scrollY;
      wave1.style.backgroundPositionX = 400 + value * 4 + "px";
      wave2.style.backgroundPositionX = 300 + value * -4 + "px";
      wave3.style.backgroundPositionX = 200 + value * 2 + "px";
      wave4.style.backgroundPositionX = 100 + value * -2 + "px";
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100px",
        overflow: "hidden",
      }}
    >
      {waves.map((wave, i) => (
        <div
        key={i}
          className={`wave wave_${i}`}
          id={wave.name}
          style={{ backgroundImage: `url(${waveBack})` }}
        ></div>
      ))}
    </div>
  );
};
