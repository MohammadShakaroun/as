import ukFlag from "../../assets/flags/uk.png";
import lebanonFlag from "../../assets/flags/lebanon.png";
import singaporeFlag from "../../assets/flags/singapore.png";
import uaeFlag from "../../assets/flags/uae.png";
import italyFlag from "../../assets/flags/italy.png";
import { WithService } from "../highOrderComponents/withService";
import "./flagsContainer.css";
import { HeaderTitle } from "../components/headerTitle/headerTitle";
import { useTranslation } from "react-i18next";

const data = [
  { flag: ukFlag, country: "United Kingdom" },
  { flag: italyFlag, country: "Italy" },
  { flag: lebanonFlag, country: "Lebanon" },
  { flag: singaporeFlag, country: "Singapore" },
  { flag: uaeFlag, country: "UAE" },
];

export const FlagsContainer = () => {
  const { t } = useTranslation();
  return (
    <div className="flags--container-outer">
      <HeaderTitle
        blackText={t("TEAM_BEYOND_1")}
        blueText={t("TEAM_BEYOND_2")}
      />
      <div className="flags--container-inner">
        {data?.map((item, index) => (
          <WithService
            key={index}
            initialY={"100vh"}
            visibleY={0}
            delay={0.15 * index}
          >
            <div className="flags--container-card" key={index}>
              <img className="flags--flag-image" src={item?.flag} alt="" />
              <span className="flags--text">{item.country}</span>
            </div>
          </WithService>
        ))}
      </div>
    </div>
  );
};
