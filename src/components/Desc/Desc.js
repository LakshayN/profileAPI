import React from "react";
import "./Desc.css";
const Desc = (props) => {
  return (
    <>
      <div className="containerD">
        <div className="name">{props.name}</div>
        <div className="posi">Software Engineer @Twitter</div>
        <div className="expLang">
          <div className="expp">
            <span className="experience">Experience</span>
            <div className="expAns">{props.experience}</div>
          </div>
          <div className="lang">
            <div className="language">Language</div>
            <div className="langAns">Hindi, English</div>
          </div>
        </div>
        <div className="textD">
          <div className="desC">{props.description}</div>
          <div className="bio">{props.shortBio}</div>
        </div>
        <div className="boxD">
                <span className="titleBoxx">
                    What is Data Engineering?
                </span>
                <div className="textBox">
                    <div className="textB">Learn the basics of Data Engineering</div>
                    <button>Book</button>
                </div>
        </div>
        <div className="boxD">
                <span className="titleBoxx">
                    What is Data Engineering?
                </span>
                <div className="textBox">
                    <div className="textB">Learn the basics of Data Engineering</div>
                    <button>Book</button>
                </div>
        </div>
      </div>
    </>
  );
};

export default Desc;
