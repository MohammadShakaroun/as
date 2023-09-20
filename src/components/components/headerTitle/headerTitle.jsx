import "./headerTitle.css";
import { WithService } from "../../highOrderComponents/withService";

export const HeaderTitle = ({ blueText, blackText }) => {
  return (
    <WithService initialX={"-100vw"} visibleX={0} duration={0.6}>
      <div className="header-title--container">
        <span className="header-title--sentence">
          <span className="header-title--black">{blackText}</span>
          {blueText}
        </span>
        <div className="header-title--divider"></div>
      </div>
    </WithService>
  );
};
