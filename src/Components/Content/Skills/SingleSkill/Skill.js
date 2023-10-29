import React from "react";
import './Skill.css'

function Skill({ skill_name, progression }) {
  return (
    <div>
      <div className="skill-name" >{skill_name}</div>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{width: progression}}
        ></div>
      </div>
    </div>
  );
}

export default Skill;
