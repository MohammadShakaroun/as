import React from "react";
import { WithService } from "../highOrderComponents/withService";
import Culture from "../components/cultureAboutUs/cultureAboutUs";
import Adaptability from "../../lottieFiles/ourCultureIcon/adaptability.json";
import Customer from "../../lottieFiles/ourCultureIcon/customer-satisfaction.json";
import Innovation from "../../lottieFiles/ourCultureIcon/innovation.json";
import Performance from "../../lottieFiles/ourCultureIcon/performance.json";
import Regulatory from "../../lottieFiles/ourCultureIcon/legal-regular.json";
import Team from "../../lottieFiles/ourCultureIcon/teamwork.json";
import { HeaderTitle } from "../components/headerTitle/headerTitle";
import { useTranslation } from "react-i18next";

const cultures = [
  {
    gif: Innovation,
    name: "INNOVATION_TITLE",
    description: "INNOVATION_TEXT",
  },
  {
    gif: Customer,
    name: "CUSTOMER_TITLE",
    description: "CUSTOMER_TEXT",
  },
  {
    gif: Team,
    name: "COLLABORATION_TITLE",
    description: "COLLABORATION_TEXT",
  },
  {
    gif: Performance,
    name: "PERFORMANCE_TITLE",
    description: "PERFORMANCE_TEXT",
  },
  {
    gif: Adaptability,
    name: "ADAPTABILITY_TITLE",
    description: "ADAPTABILITY_TEXT",
  },
  {
    gif: Regulatory,
    name: "ETHICAL_TITLE",
    description: "ETHICAL_TEXT",
  },
];

export const CultureCards = () => {
  const { t } = useTranslation();
  return (
    <div style={{ width: "100%" }}>
      <HeaderTitle
        blackText={t("OUR_CULTURE_1")}
        blueText={t("OUR_CULTURE_2")}
      />
      <div className="ourCultureSection">
        {cultures?.map((item, i) => (
          <WithService
            key={i}
            initialX={"100vw"}
            duration={0.3}
            delay={0.1 * i}
            visibleX={0}
          >
            <Culture
              name={t(item?.name)}
              description={t(item?.description)}
              gif={item?.gif}
            />
          </WithService>
        ))}
      </div>
    </div>
  );
};
