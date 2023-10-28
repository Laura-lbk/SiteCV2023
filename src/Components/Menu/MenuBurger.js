import React from "react";
import "./MenuBurger.css";
import { slide as Menu } from "react-burger-menu";
import Row from "react-bootstrap/Row";

import { HashLink } from "react-router-hash-link";

import { useTranslation } from "react-i18next";

function MenuBurger() {
  const [t, i18n] = useTranslation("menu");
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
      <Row>
        <img
          src={require("../../Images/EnglishFlag.jpg")}
          alt=""
          onClick={() => handleChangeLanguage("en")}
          class="drapeau"
        />

        <img
          src={require("../../Images/FrenchFlag.png")}
          alt=""
          onClick={() => handleChangeLanguage("fr")}
          class="drapeau"
        />
      </Row>
      <HashLink smooth to={"/page#section-presentation"}>
        {t("MENU.PRESENTATION")}
      </HashLink>
      <HashLink smooth to={"/page#section-skills"}>
        {t("MENU.SKILLS")}
      </HashLink>
      <HashLink smooth to={"/page#section-school"}>
        {t("MENU.SCHOOL")}
      </HashLink>
      <HashLink smooth to={"/page#section-experience"}>
        {t("MENU.EXP")}
      </HashLink>
      <HashLink smooth to={"/page#section-about"}>
        {t("MENU.ABOUT")}
      </HashLink>
    </Menu>
  );
}
export default MenuBurger;

// class MenuBurger extends React.Component {
//   showSettings(event) {
//     event.preventDefault();
//   }
//   render() {
//     return (
//       <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
//         <HashLink smooth to={"/page#section-presentation"}>
//           Présentation
//         </HashLink>
//         <HashLink smooth to={"/page#section-skills"}>
//           Compétences
//         </HashLink>
//         <a id="about" className="menu-item" href="/about">
//           About
//         </a>
//         <a id="contact" className="menu-item" href="/contact">
//           Contact
//         </a>
//       </Menu>
//     );
//   }
// }
