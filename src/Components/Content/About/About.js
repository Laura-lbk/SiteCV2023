import React from "react";
import "./About.css";
import Carousel from "react-bootstrap/Carousel";

import { useTranslation } from "react-i18next";

function About() {
  const [about, i18n] = useTranslation("about");

  return (
    <div id="section-about">
      <h1>{about("ABOUT.TITLE")}</h1>

      <Carousel interval={null} indicators={false}>
        <Carousel.Item>
          <div className="about-image-container">
            <img
              src={require("../../../Images/About/Equitation.jpg")}
              alt="Equitation"
              className="about-image"
              id="about-equitation"
            ></img>
          </div>
          <Carousel.Caption>
            <h3 className="about-title">{about("ABOUT.EQUITATION.TITLE")}</h3>
            <p className="about-description">
              {about("ABOUT.EQUITATION.TEXT1")}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="about-image-container">
            <img
              src={require("../../../Images/About/Gâteaux.jpg")}
              alt="Gateaux"
              className="about-image"
              id="about-gateaux"
            ></img>
          </div>
          <Carousel.Caption>
            <h3 className="about-title">{about("ABOUT.FOOD.TITLE")}</h3>
            <p className="about-description">{about("ABOUT.FOOD.TEXT1")}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="about-image-container">
            <img
              src={require("../../../Images/About/Carte.jpg")}
              alt="Dessin"
              className="about-image"
              id="about-carte"
            ></img>
          </div>
          <Carousel.Caption>
            <h3 className="about-title">{about("ABOUT.DRAWING.TITLE")}</h3>
            <p className="about-description">{about("ABOUT.DRAWING.TEXT1")}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="about-image-container">
            <img
              src={require("../../../Images/About/Sportive.jpg")}
              alt="Sport"
              className="about-image"
              id="about-sport"
            ></img>
          </div>
          <Carousel.Caption>
            <h3 className="about-title">{about("ABOUT.SPORT.TITLE")}</h3>
            <p className="about-description">{about("ABOUT.SPORT.TEXT1")}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="about-image-container">
            <img
              src={require("../../../Images/About/Youtube.jpg")}
              alt="Youtube"
              className="about-image"
              id="about-youtube"
            ></img>
          </div>
          <Carousel.Caption>
            <h3 className="about-title">{about("ABOUT.YOUTUBE.TITLE")}</h3>
            <p className="about-description">{about("ABOUT.YOUTUBE.TEXT1")}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="ending-container">
        <div className="ending-text">
          {about("ABOUT.ENDING.TEXT1")}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/laura-lieberknecht-66220b181/"
          >
            {" "}
            Linkedin
          </a>
        </div>
        <div style={{ display: "flex" }}>
          <div className="ending-text">
            {about("ABOUT.ENDING.TEXT2")}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Laura-lbk/SiteCV2023"
            >
              <img
                src={require("../../../Images/Software/Git.png")}
                alt="Git"
                style={{ with: "20px", height: "20px", marginLeft: "10px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
