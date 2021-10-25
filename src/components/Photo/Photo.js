import React from "react";
import "./Photo.css";

const Photo = (props) => {
  return (
    <>
      <div className="containerP">
        <img className="profpic" src={props.avatar} />
        <div className="links">
          <i class="fab fa-linkedin"></i>

          <i class="fab fa-twitter-square"></i>

          <i class="fab fa-github-square"></i>
        </div>
        <div className="coreSkills">
          <div className="skills">Core Skills</div>
          <span>{props.skills}</span>
        </div>
        <div className="last">
          <div className="skills">Past Companies</div>
          <div className="pastCompanies">
            <img className="pastCompaniesImg" src={props.pastCompanies} />
            <img className="pastCompaniesImg" src={props.pastCompanies} />
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Photo;
