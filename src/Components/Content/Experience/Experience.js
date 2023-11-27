import React from "react";
import "./Experience.css";

import { useTranslation } from "react-i18next";

import Accordion from "react-bootstrap/Accordion";

function Experience() {
  const [exp, i18n] = useTranslation("experience");

  return (
    <div className="experience-container" id="section-experience">
      <h1>{exp("EXPERIENCE.TITLE")}</h1>
      <div className="accordion-container">
        <Accordion alwaysOpen defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <div className="accordion-header-flex">
                <div>{exp("EXPERIENCE.AE.TITLE")} </div>
                <div>{exp("EXPERIENCE.AE.DATE")}</div>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <div className="accordion-body-flex">
                <div> {exp("EXPERIENCE.AE.DESCRIPTION1")}</div>
                <div style={{ height: "20px", width: "30px" }}></div>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.youtube.com/channel/UCp0Thsvsbw4tiH8-yicoUyg"
                  >
                    <img
                      src={require("../../../Images/Social/Youtube.png")}
                      alt="Angular"
                      className="software"
                    />
                  </a>
                </div>
              </div>
              <div className="accordion-body-flex">
                <div> {exp("EXPERIENCE.AE.DESCRIPTION2")}</div>
                <div style={{ height: "20px", width: "30px" }}></div>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/unicornis_et_curedent/"
                  >
                    <img
                      src={require("../../../Images/Social/Instagram.png")}
                      alt="Angular"
                      className="software"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.tiktok.com/@unicornis_tiktok"
                  >
                    <img
                      src={require("../../../Images/Social/Tiktok.png")}
                      alt="Angular"
                      className="software"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://discord.com/invite/KCV3Vyh"
                  >
                    <img
                      src={require("../../../Images/Social/Discord.png")}
                      alt="Angular"
                      className="software"
                    />
                  </a>
                </div>
              </div>
              <div> {exp("EXPERIENCE.AE.DESCRIPTION3")}</div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.unicornis-boutique.fr/"
              >
                www.unicornis-boutique.fr
              </a>
              <div style={{ width: "1px", height: "10px" }}></div>
              <div> {exp("EXPERIENCE.AE.DESCRIPTION4")}</div>
              <div style={{ fontSize: "0.8em" }}>
                (Microïds, Mindscape, Nacon, Pocket Jeunesse, Star Stable
                Entertainement)
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <div className="accordion-header-flex">
                <div>{exp("EXPERIENCE.FAC.TITLE")} </div>
                <div>{exp("EXPERIENCE.FAC.DATE")}</div>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <div>{exp("EXPERIENCE.FAC.DESCRIPTION")}</div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <div className="accordion-header-flex">
                <div>{exp("EXPERIENCE.APPRENTICE.TITLE")} </div>
                <div>{exp("EXPERIENCE.APPRENTICE.DATE")}</div>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <div>{exp("EXPERIENCE.APPRENTICE.DESCRIPTION")}</div>
              <div>
                <img
                  src={require("../../../Images/Software/Angular.png")}
                  alt="Angular"
                  className="software"
                />
                <img
                  src={require("../../../Images/Software/Symfony.png")}
                  alt="Angular"
                  className="software"
                />
                <img
                  src={require("../../../Images/Software/Oracle.png")}
                  alt="Angular"
                  className="software"
                />
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.mipih.fr/"
              >
                {exp("EXPERIENCE.APPRENTICE.LINK")}
              </a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <div className="accordion-header-flex">
                <div>{exp("EXPERIENCE.INTERN.TITLE")} </div>
                <div>{exp("EXPERIENCE.INTERN.DATE")}</div>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <div>{exp("EXPERIENCE.INTERN.DESCRIPTION")}</div>
              <div>
                <img
                  src={require("../../../Images/Software/Angular.png")}
                  alt="Angular"
                  className="software"
                />
                <img
                  src={require("../../../Images/Software/Symfony.png")}
                  alt="Angular"
                  className="software"
                />
                <img
                  src={require("../../../Images/Software/Oracle.png")}
                  alt="Angular"
                  className="software"
                />
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.mipih.fr/"
              >
                {exp("EXPERIENCE.APPRENTICE.LINK")}
              </a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              <div className="accordion-header-flex">
                <div>{exp("EXPERIENCE.INTERNDUT.TITLE")} </div>
                <div>{exp("EXPERIENCE.INTERNDUT.DATE")}</div>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <div>{exp("EXPERIENCE.INTERNDUT.DESCRIPTION")}</div>
              <div>
                <img
                  src={require("../../../Images/Software/Gatsby.png")}
                  alt="Angular"
                  className="software"
                />
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/agence-ohana/about/"
              >
                {exp("EXPERIENCE.APPRENTICE.LINK")}
              </a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              <div className="accordion-header-flex">
                <div>{exp("EXPERIENCE.VOLUNTEER.TITLE")} </div>
                <div>{exp("EXPERIENCE.VOLUNTEER.DATE")}</div>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <div>{exp("EXPERIENCE.VOLUNTEER.DESCRIPTION")}</div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.leutenberger-kinderbauernhof.de/"
              >
                {exp("EXPERIENCE.APPRENTICE.LINK")}
              </a>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default Experience;
