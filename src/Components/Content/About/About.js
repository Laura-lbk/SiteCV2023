import React from "react";
import "./About.css";
import Carousel from "react-bootstrap/Carousel";
import useWindowDimensions from "../../../Hooks/useWindowsDimensions";

import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";

import { useTranslation } from "react-i18next";

function About() {
  const [about, i18n] = useTranslation("about");

  const { height, width } = useWindowDimensions();

  let equitation;
  let gateaux;
  let carte;
  let sportive;
  let youtube;

  if (width > 900) {
    equitation = (
      <img
        src={require("../../../Images/About/Equitation.png")}
        alt="Equitation"
        className="about-image"
        id="about-equitation"
      ></img>
    );
    gateaux = (
      <img
        src={require("../../../Images/About/Gateaux.png")}
        alt="Equitation"
        className="about-image"
        id="about-equitation"
      ></img>
    );
    carte = (
      <img
        src={require("../../../Images/About/Carte.png")}
        alt="Equitation"
        className="about-image"
        id="about-equitation"
      ></img>
    );
    sportive = (
      <img
        src={require("../../../Images/About/Sportive.png")}
        alt="Equitation"
        className="about-image"
        id="about-equitation"
      ></img>
    );
    youtube = (
      <img
        src={require("../../../Images/About/Youtube.png")}
        alt="Equitation"
        className="about-image"
        id="about-equitation"
      ></img>
    );
  } else {
    equitation = (
      <img
        src={require("../../../Images/About/SquareEquitation.png")}
        alt="Equitation"
        className="about-image"
        id="about-equitation"
      ></img>
    );
    gateaux = (
      <img
        src={require("../../../Images/About/SquareGateaux.png")}
        alt="Equitation"
        className="about-image"
        id="about-equitation"
      ></img>
    );
    carte = (
      <img
        src={require("../../../Images/About/SquareCarte.png")}
        alt="Equitation"
        className="about-image"
        id="about-equitation"
      ></img>
    );
    sportive = (
      <img
        src={require("../../../Images/About/SquareSportive.png")}
        alt="Equitation"
        className="about-image"
        id="about-equitation"
      ></img>
    );
    youtube = (
      <img
        src={require("../../../Images/About/SquareYoutube.png")}
        alt="Equitation"
        className="about-image"
        id="about-equitation"
      ></img>
    );
  }

  return (
    <div id="section-about">
      <h1>{about("ABOUT.TITLE")}</h1>

      <Carousel
        interval={null}
        indicators={false}
        prevIcon={<FaArrowCircleLeft className="carousel-navigation"/>}
        nextIcon={<FaArrowCircleRight className="carousel-navigation"/>}
      >
        <Carousel.Item>
          <div className="carousel-caption-mobile">
            <h3 className="about-title">{about("ABOUT.EQUITATION.TITLE")}</h3>
            <p className="about-description">
              {about("ABOUT.EQUITATION.TEXT1")}
            </p>
          </div>
          <div className="about-image-container">{equitation}</div>
          <Carousel.Caption>
            <h3 className="about-title">{about("ABOUT.EQUITATION.TITLE")}</h3>
            <p className="about-description">
              {about("ABOUT.EQUITATION.TEXT1")}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-caption-mobile">
            <h3 className="about-title">{about("ABOUT.FOOD.TITLE")}</h3>
            <p className="about-description">{about("ABOUT.FOOD.TEXT1")}</p>
          </div>
          <div className="about-image-container">{gateaux}</div>
          <Carousel.Caption>
            <h3 className="about-title">{about("ABOUT.FOOD.TITLE")}</h3>
            <p className="about-description">{about("ABOUT.FOOD.TEXT1")}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-caption-mobile">
            <h3 className="about-title">{about("ABOUT.DRAWING.TITLE")}</h3>
            <p className="about-description">{about("ABOUT.DRAWING.TEXT1")}</p>
          </div>
          <div className="about-image-container">{carte}</div>
          <Carousel.Caption>
            <h3 className="about-title">{about("ABOUT.DRAWING.TITLE")}</h3>
            <p className="about-description">{about("ABOUT.DRAWING.TEXT1")}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-caption-mobile">
            <h3 className="about-title">{about("ABOUT.SPORT.TITLE")}</h3>
            <p className="about-description">{about("ABOUT.SPORT.TEXT1")}</p>
          </div>
          <div className="about-image-container">{sportive}</div>
          <Carousel.Caption>
            <h3 className="about-title">{about("ABOUT.SPORT.TITLE")}</h3>
            <p className="about-description">{about("ABOUT.SPORT.TEXT1")}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-caption-mobile">
            <h3 className="about-title">{about("ABOUT.YOUTUBE.TITLE")}</h3>
            <p className="about-description">{about("ABOUT.YOUTUBE.TEXT1")}</p>
          </div>
          <div className="about-image-container">{youtube}</div>
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
