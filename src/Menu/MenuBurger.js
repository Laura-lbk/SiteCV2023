import React from "react";
import "./MenuBurger.css";
import { slide as Menu } from "react-burger-menu";

import { HashLink } from "react-router-hash-link";

class MenuBurger extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
        <HashLink smooth to={"/page#section-presentation"}>
          Présentation
        </HashLink>
        <HashLink smooth to={"/page#section-skills"}>
          Compétences
        </HashLink>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
      </Menu>
    );
  }
}

export default MenuBurger;
