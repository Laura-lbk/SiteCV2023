import React from "react";
import "./Skills.css";
import Skill from "../SingleSkill/Skill";
import Transverse from "../Transverse/Transverse";

import { useTranslation } from "react-i18next";

function Skills() {
  const [menu] = useTranslation("menu");
  return (
    <div id="section-skills">
      <div className="skills-container">
        <h1>{menu("MENU.SKILLS")}</h1>
        <div className="temoin">
          <div className="temoin-legende">
            <div>Neophyte</div>
            <div>Junior</div>
            <div>Expert</div>
          </div>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "100%" }}
            ></div>
          </div>
        </div>

        <div className="ligne">
          <div className="colonne1-3">
            <img
              src={require("../../../../Images/Software/Angular.png")}
              alt="Angular"
              className="software"
            />
          </div>
          <div className="colonne2-3">
            <Skill skill_name={"Typescript"} progression={"70%"}></Skill>
          </div>
        </div>

        <div className="ligne">
          <div className="colonne1-3">
            <img
              src={require("../../../../Images/Software/React.png")}
              alt="React"
              className="software"
            />
            <img
              src={require("../../../../Images/Software/Gatsby.png")}
              alt="Gatsby"
              className="software"
            />
          </div>
          <div className="colonne2-3">
            <Skill skill_name={"Javascript"} progression={"60%"}></Skill>
          </div>
        </div>

        <div className="ligne">
          <div className="colonne1-3">
            <img
              src={require("../../../../Images/Software/Symfony.png")}
              alt="Symfony"
              className="software"
            />
          </div>
          <div className="colonne2-3">
            <Skill skill_name={"Symfony"} progression={"50%"}></Skill>
          </div>
        </div>

        <div className="ligne">
          <div className="colonne1-3">
            <img
              src={require("../../../../Images/Software/Java.png")}
              alt="Java"
              className="software"
            />
          </div>
          <div className="colonne2-3">
            <Skill skill_name={"Java"} progression={"30%"}></Skill>
          </div>
        </div>

        <div className="ligne">
          <div className="colonne1-3">
            <img
              src={require("../../../../Images/Software/Oracle.png")}
              alt="Oracle"
              className="software"
            />
            <img
              src={require("../../../../Images/Software/PhpMyAdmin.png")}
              alt="PhpMyAdmin"
              className="software"
            />
          </div>
          <div className="colonne2-3">
            <Skill skill_name={"PLSQL"} progression={"70%"}></Skill>
          </div>
        </div>

        <div className="ligne">
          <div className="colonne1-3">
            <img
              src={require("../../../../Images/Software/MongoDB.png")}
              alt="MongoDB"
              className="software"
            />
          </div>
          <div className="colonne2-3">
            <Skill skill_name={"NoSQL"} progression={"30%"}></Skill>
          </div>
        </div>

        <div className="ligne">
          <div className="colonne1-3">
            <img
              src={require("../../../../Images/Software/Git.png")}
              alt="Git"
              className="software"
            />
          </div>
          <div className="colonne2-3">
            <Skill skill_name={"Git"} progression={"80%"}></Skill>
          </div>
        </div>

        <Transverse></Transverse>
      </div>
    </div>
  );
}

export default Skills;
