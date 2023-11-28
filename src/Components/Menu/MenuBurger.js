import React from "react";
import "./MenuBurger.css";
import { slide as Menu } from "react-burger-menu";

import { HashLink } from "react-router-hash-link";

import { useTranslation } from "react-i18next";

function MenuBurger() {
  const [t, i18n] = useTranslation("menu");
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
      <div className="drapeau-container">
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
      </div>
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
