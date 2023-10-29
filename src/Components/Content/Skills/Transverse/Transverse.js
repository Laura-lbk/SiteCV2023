import React from "react";
import "./Transverse.css";
import {FaProjectDiagram} from 'react-icons/fa'
import {HiUserGroup} from 'react-icons/hi2'

import { useTranslation } from "react-i18next";

function Transverse() {
  const [trans] = useTranslation("transverse");
  return (
    <div className="transverse">
      <h2>{trans("TRANSVERSE.TITLE")}</h2>

      <div className="language-container">
        <div>
        <img src={require("../../../../Images/EnglishFlag.jpg")} alt="" className="language"/>
        <div className="language-desc">{trans("TRANSVERSE.ENGLISH")}</div>
        </div>
        <div>
        <img src={require("../../../../Images/FrenchFlag.png")} alt="" className="language"/>
        <div className="language-desc">{trans("TRANSVERSE.FRENCH")}</div>
        </div>
        <div>
        <img src={require("../../../../Images/GermanFlag.png")} alt="" className="language"/>
        <div className="language-desc">{trans("TRANSVERSE.GERMAN")}</div>
        </div>
      </div>
      <div className="other-container">
        
      <div className="ligne">
        <div className="colonne1-3">
          <img
            src={require("../../../../Images/Software/PermierPro.png")}
            alt="Premier Pro"
            className="software"
          />
        </div>
        <div className="transverse-text">
          {trans("TRANSVERSE.PREMIERPRO")}
        </div>
      </div>

      <div className="ligne">
        <div className="colonne1-3">
          <div className="icone">
          <FaProjectDiagram />
          </div>
        </div>
        <div className="transverse-text">
          {trans("TRANSVERSE.PROJECT")}
        </div>
      </div>

      <div className="ligne">
        <div className="colonne1-3">
          <div className="icone">
          <HiUserGroup />
          </div>
        </div>
        <div className="transverse-text">
          {trans("TRANSVERSE.COMMUNITY")}
        </div>
      </div>
        
      </div>
    </div>
  );
}

export default Transverse;
