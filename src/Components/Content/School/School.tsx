import React from "react";
import "./School.css";

import { ParallaxBanner } from "react-scroll-parallax";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";
import { ParallaxBannerLayer } from "react-scroll-parallax";

import { useParallax } from "react-scroll-parallax";
import { useTranslation } from "react-i18next";

import UPJVImage from "../../../Images/UPJVPink.png";

function School() {
  const [school] = useTranslation("school");

  //initiation du scrolling
  //   const dut = useParallax<HTMLDivElement>({
  //     translateY: ["0px", "0px"],
  //     translateX: [-100, 0],
  //   });

  //   const licence = useParallax<HTMLDivElement>({
  //     translateY: ["0px", "0px"],
  //     translateX: [-200, 0],
  //   });
  //   const master = useParallax<HTMLDivElement>({
  //     translateY: ["0px", "0px"],
  //     translateX: [-250, 0],
  //   });
  //   const image = useParallax<HTMLDivElement>({
  //     translateY: [0, 200],
  //   });

  const background: BannerLayer = {
    image: UPJVImage,
    translateY: [0, 0],
    shouldAlwaysCompleteAnimation: true,
  };

  //   const dut: BannerLayer = {
  //     translateX: [-30,0],
  //     translateY: [0, 70],

  //     shouldAlwaysCompleteAnimation: false,
  //     expanded: false,
  //     children: (
  //       <div>
  //         <div className="information-s">
  //           <div className="information-container">
  //             <div className="date">2017 - 2019</div>
  //             <div className="label">{school("SCHOOL.DUT.LABEL")}</div>
  //             <div className="description">
  //               {school("SCHOOL.DUT.INFORMATION")}
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     ),
  //   };

  //   const licence: BannerLayer = {
  //     translateX: [-250, 0],
  //     shouldAlwaysCompleteAnimation: true,
  //     expanded: false,
  //     children: (
  //       <div>
  //         <div className="information-m">
  //           <div className="information-container">
  //             <div className="date">2019 - 2020</div>
  //             <div className="label">{school("SCHOOL.LICENCE.LABEL")}</div>
  //             <div className="description">
  //               {school("SCHOOL.LICENCE.INFORMATION")}
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     ),
  //   };

  //   const master: BannerLayer = {
  //     translateX: [0, 30],
  //     shouldAlwaysCompleteAnimation: true,
  //     expanded: false,
  //     children: (
  //       <div className="information-l">
  //         <div className="information-container">
  //           <div className="date">2020 - 2023</div>
  //           <div className="label">{school("SCHOOL.MASTER.LABEL")}</div>
  //           <div className="description">
  //             {school("SCHOOL.MASTER.INFORMATION")}
  //           </div>
  //           <div className="description">
  //             {school("SCHOOL.MASTER.INFORMATION2")}
  //           </div>
  //         </div>
  //       </div>
  //     ),
  //   };

  return (
    <div id="school-container" className="school-container">
      <h1>{school("SCHOOL.TITLE")}</h1>

      <ParallaxBanner
        layers={[
          {
            image: UPJVImage,
            translateY: [0, 0],
            shouldAlwaysCompleteAnimation: true,
          },
          {
            children: (
              <div className="information-s" style={{position: "sticky"}}>
                <div className="information-container">
                  <div className="date">2017 - 2019</div>
                  <div className="label">{school("SCHOOL.DUT.LABEL")}</div>
                  <div className="description">
                    {school("SCHOOL.DUT.INFORMATION")}
                  </div>
                </div>
              </div>
            ),
            translateY: ["0px", "0px"],
            translateX: [-30, 1],
          },
        ]}
        className="full"
      ></ParallaxBanner>

      {/* <div ref={image.ref}>
        <img
          className="upjv-image"
          src={require("../../../Images/UPJVPink.png")}
          alt=""
        ></img>
      </div> */}

      {/* <div className="information-s" ref={dut.ref}>
        <div className="information-container">
          <div className="date">2017 - 2019</div>
          <div className="label">{school("SCHOOL.DUT.LABEL")}</div>
          <div className="description">{school("SCHOOL.DUT.INFORMATION")}</div>
        </div>
      </div> */}
      {/* <div className="information-m" ref={licence.ref}>
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
      </div> */}
    </div>
  );
}

export default School;
