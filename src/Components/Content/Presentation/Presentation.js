import React from "react";
import "./Presentation.css";

import { useTranslation } from "react-i18next";

function calculateAge(bd) {
  var birthDate = new Date(bd);
  var otherDate = new Date();

  var years = otherDate.getFullYear() - birthDate.getFullYear();

  if (
    otherDate.getMonth() < birthDate.getMonth() ||
    (otherDate.getMonth() == birthDate.getMonth() &&
      otherDate.getDate() < birthDate.getDate())
  ) {
    years--;
  }

  return years;
}

function Presentation() {
  var age = calculateAge("04/28/1999");
  const [pr] = useTranslation("presentation");

  return (
    <div id="section-presentation">
      <div class="presentation-container">
        <div className="presentation-image">
          {/* <img
            src={require("../../../Images/Selfie.jpg")}
            alt="Photo"
            id="selfie"
          ></img> */}
        </div>
        <div className="presentation-spacer"></div>
        <div className="presentation-text">
          <div>{pr("PRESENTATION.TEXT1")}</div>
          <div>
            {" "}
            {pr("PRESENTATION.TEXT2")}
            {age}
            {pr("PRESENTATION.TEXT3")}
          </div>
          <div style={{ width: "70%", margin: "auto" }}>
            {" "}
            {pr("PRESENTATION.TEXT4")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
