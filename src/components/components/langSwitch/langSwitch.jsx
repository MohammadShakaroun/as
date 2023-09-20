import React from "react";
import "./langSwitch.css";
// import english from "../../../assets/images/flaglang/usa.png";
// import LangFlag from "../langFlag/langFlag";

// const countries = [
//   {
//     img: english,
//     code: "en",
//     name: "English",
//   },
// ];

function LangSwitch() {
  // const [isDropdownOpen, setDropdownOpen] = useState(false);
  // const [langSelected, setLangSelected] = useState(null);

  // const handleDropdownToggle = () => {
  //   setDropdownOpen(!isDropdownOpen);
  // };

  // const handleChangeLanguage = (language) => {
  //   localStorage.setItem("i18nextLng", language);
  //   window.location.reload();
  // };

  // useEffect(() => {
  //   let language = localStorage.getItem("i18nextLng");

  //   let res = countries.find((lang) => lang.code === language);
  //   setLangSelected(res);
  // }, []);

  return (
    <div className="lang-dropdown--container">
      {/* <div>
        <div className="button_lang" onClick={handleDropdownToggle}>
          <img
            src={langSelected?.img || english}
            alt=""
            className="lang-flag--icon"
          />
        </div>
        {isDropdownOpen && (
          <ul className="dropdown_flags--container">
            {countries.map((item, index) => (
              <LangFlag
                key={item?.name}
                onClick={() => handleChangeLanguage(item?.code)}
                title={item?.name}
                img={item?.img}
                code={item?.code}
              />
            ))}
          </ul>
        )}
      </div> */}
    </div>
  );
}

export default LangSwitch;
