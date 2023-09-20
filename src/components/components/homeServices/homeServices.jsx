import React from "react";
import "./homeServices.css";
import Message from "../../../assets/images/ServicesHome/Message.png";
import FastMessage from "../../../assets/images/ServicesHome/FastMessage.png";
import SendId from "../../../assets/images/ServicesHome/SendId.png";
import FreeSupport from "../../../assets/images/ServicesHome/FreeSupport.png";
import HomeData from "../homeData/homeData";

const Services = [
  {
    img: Message,
    title: "Real-time message status monitoring",
    desc: "SMS system Self-developed SMPP platform with a lot of featuresinside, keeps our service super stable and reliable even for high volume of traffic",
  },
  {
    img: FastMessage,
    title: "Lightning fast message delivery",
    desc: "Lightning fast message delivery refers to the rapid and near- instantaneous transmission of messages or information from one point to another.",
  },
  {
    img: SendId,
    title: "Customized sender ID",
    desc: "A customized sender ID, also known as an alphanumeric sender ID or a sender name, is a feature used in various communication channels to personalize the sender information that appears on recipients devices.",
  },
  {
    img: FreeSupport,
    title: "Professional free 24/7 support",
    desc: "Professional free 24/7 support is a valuable service provided by many organizations to ensure that their customers receive assistance and guidance whenever they need it.",
  },
];

function HomeServices() {
  return (
    <div className="Service_Section">
      <div className="ServicesTitle">
        <h2 className="OurStory">
          Our <span className="StoryWord">Services</span>
        </h2>
      </div>
      <div className="ServiceCards" >
        {Services.map((item) => (
          <HomeData title={item?.title} img={item?.img} desc={item?.desc} />
        ))}
      </div>
    </div>
  );
}

export default HomeServices;
