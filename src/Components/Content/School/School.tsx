import React from "react";
import "./School.css";
import { useTranslation } from "react-i18next";


function School() {
  const [school] = useTranslation("school");

  window.onload = init;

  function init() {
    window.addEventListener(
      "scroll",
      () => {
        document.body.style.setProperty(
          "--scroll",
          window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
        );
      },
      false
    );
  }

  return (
    <div id="section-school">
      <div id="school-container" className="school-container">
        <div className="school-title">
          <img
            className="upjv-logo"
            src={require("../../../Images/UPJVPink.png")}
            alt=""
          ></img>
          <h1>{school("SCHOOL.TITLE")}</h1>
          <img
            className="upjv-logo"
            src={require("../../../Images/UPJVPink.png")}
            alt=""
          ></img>
        </div>

        <div className="upjv-image-container">
          <img
            className="upjv-image"
            src={require("../../../Images/UPJVBackground.jpg")}
            alt=""
          ></img>
        </div>

        <div className="first">
          <div className="information-container">
            <div className="date">2017 - 2019</div>
            <div className="label">{school("SCHOOL.DUT.LABEL")}</div>
            <div className="description">
              {school("SCHOOL.DUT.INFORMATION")}
            </div>
          </div>
        </div>
        <div className="second">
          <div className="information-container">
            <div className="date">2019 - 2020</div>
            <div className="label">{school("SCHOOL.LICENCE.LABEL")}</div>
            <div className="description">
              {school("SCHOOL.LICENCE.INFORMATION")}
            </div>
          </div>
        </div>
        <div className="third">
          <div className="information-container">
            <div className="date">2020 - 2023</div>
            <div className="label">{school("SCHOOL.MASTER.LABEL")}</div>
            <div className="description">
              {school("SCHOOL.MASTER.INFORMATION")}
            </div>
            <div className="description">
              {school("SCHOOL.MASTER.INFORMATION2")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default School;
