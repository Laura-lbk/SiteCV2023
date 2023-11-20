import React from "react";
import "./School.css";
import { useParallax } from "react-scroll-parallax";
import { useTranslation } from "react-i18next";


function School() {
  const [school] = useTranslation("school");

  // initiation du scrolling
  const dut = useParallax<HTMLDivElement>({
    translateY: ["0px", "0px"],
    translateX: [-100, 0],
  });

  const licence = useParallax<HTMLDivElement>({
    translateY: ["0px", "0px"],
    translateX: [-200, 0],
  });
  const master = useParallax<HTMLDivElement>({
    translateY: ["0px", "0px"],
    translateX: [-250, 0],
  });


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

        <div className="information-s" ref={dut.ref}>
          <div className="information-container">
            <div className="date">2017 - 2019</div>
            <div className="label">{school("SCHOOL.DUT.LABEL")}</div>
            <div className="description">
              {school("SCHOOL.DUT.INFORMATION")}
            </div>
          </div>
        </div>
        <div className="information-m" ref={licence.ref}>
          <div className="information-container">
            <div className="date">2019 - 2020</div>
            <div className="label">{school("SCHOOL.LICENCE.LABEL")}</div>
            <div className="description">
              {school("SCHOOL.LICENCE.INFORMATION")}
            </div>
          </div>
        </div>
        <div className="information-l" ref={master.ref}>
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
