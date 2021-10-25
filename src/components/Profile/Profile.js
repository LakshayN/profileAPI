import React from "react";

import "../Profile/Profile.css";
import Desc from "../Desc/Desc";
import Photo from "../Photo/Photo";
import Calender from "../Calender/Calender";
import Header from "../Header/Header";

const Profile = (props) => {
  return (
    <>
      <Header image={props.avatar} />
      <div className="pageBox">
        <div className="div1">
          <Photo
            avatar={props.avatar}
            skills={props.skills}
            pastCompanies={props.pastCompanies}
          />
        </div>
        <div className="div2">
          <Desc
            name={props.name}
            experience={props.experience}
            description={props.description}
            shortBio={props.shortBio}
          />
        </div>
        <div className="div3">
          <Calender className="div3" />
        </div>
      </div>
    </>
  );
};

export default Profile;
