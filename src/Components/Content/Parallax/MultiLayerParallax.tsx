import React, { useEffect, useState } from "react";
import "./Parallax.css"
import { ParallaxBanner } from "react-scroll-parallax";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";

import MountainBackground from "../../../Images/Mountains/MountainBackground.png"
import Mountain3 from "../../../Images/Mountains/Mountain3.png"
import Mountain2 from "../../../Images/Mountains/Mountain2.png"
import Mountain1 from "../../../Images/Mountains/Mountain1.png"

import { useTranslation } from "react-i18next";


function Homepage() {

const [t] = useTranslation("menu");

const background: BannerLayer = {
  image: MountainBackground,
  translateY: [0, 0],
  scale: [1, 1.1, "easeOutCubic"],
  shouldAlwaysCompleteAnimation: true
};

const headline: BannerLayer = {
  translateY: [0, 30],
  shouldAlwaysCompleteAnimation: true,
  expanded: false,
  children: (
    <div className="inset center">
      <h1>{t("MENU.TITLE")}</h1>
    </div>
  )
};

const mountain3: BannerLayer = {
  image: Mountain3,
  translateY: [0, 10],
  scale: [1, 1.1, "easeOutCubic"],
  shouldAlwaysCompleteAnimation: true
};

const mountain2: BannerLayer = {
  image: Mountain2,
  translateY: [0, 15],
  scale: [1, 1.1, "easeOutCubic"],
  shouldAlwaysCompleteAnimation: true
};

const mountain1: BannerLayer = {
  image: Mountain1,
  translateY: [0, 25],
  scale: [1, 1.1, "easeOutCubic"],
  shouldAlwaysCompleteAnimation: true
};

  return (
    <div className="parallax-container">
    <ParallaxBanner
      layers={[background, headline, mountain3, mountain2, mountain1]}
      className="full"
    />
    </div>
  );
}

export default Homepage;
