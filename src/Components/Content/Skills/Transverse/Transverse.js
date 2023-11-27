import React from "react";
import "./Transverse.css";
import { FaProjectDiagram } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { useTranslation } from "react-i18next";

function MyProjectManagementModal(props) {
  const [trans] = useTranslation("transverse");
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {trans("TRANSVERSE.PROJECT")}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <li>{trans("TRANSVERSE.PROJECTMANAGEMENT.TEXT1")}</li>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/drive/folders/1-Yg11IUbuCRYPH5OiH1BYadtlnDA9pCy?usp=drive_link"
          style={{display:"block", marginLeft:"20px"}}
        >
          {trans("TRANSVERSE.PROJECTMANAGEMENT.TEXT2")}
        </a>

        <li>{trans("TRANSVERSE.PROJECTMANAGEMENT.TEXT4")}</li>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Transverse() {
  const [trans] = useTranslation("transverse");
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="transverse">
      <h2>{trans("TRANSVERSE.TITLE")}</h2>

      <div className="language-container">
        <div>
          <img
            src={require("../../../../Images/EnglishFlag.jpg")}
            alt=""
            className="language"
          />
          <div className="language-desc">{trans("TRANSVERSE.ENGLISH")}</div>
        </div>
        <div>
          <img
            src={require("../../../../Images/FrenchFlag.png")}
            alt=""
            className="language"
          />
          <div className="language-desc">{trans("TRANSVERSE.FRENCH")}</div>
        </div>
        <div>
          <img
            src={require("../../../../Images/GermanFlag.png")}
            alt=""
            className="language"
          />
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

        <div className="ligne modal-transverse" onClick={() => setModalShow(true)}>
          <div className="colonne1-3">
            <div className="icone">
              <FaProjectDiagram />
            </div>
          </div>
          <div className="transverse-text">{trans("TRANSVERSE.PROJECT")}</div>
        </div>
        <MyProjectManagementModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />

        <div className="ligne">
          <div className="colonne1-3">
            <div className="icone">
              <HiUserGroup />
            </div>
          </div>
          <div className="transverse-text">{trans("TRANSVERSE.COMMUNITY")}</div>
        </div>
      </div>
    </div>
  );
}

export default Transverse;
