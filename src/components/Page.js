import React, { Fragment } from "react";
import './Page.css';
import Profile from "./Profile/Profile";
import { Link } from "react-router-dom";
import DataContext from "../context/DataContext";
const Page = (props) => {

    const clickHandler = () => {

    }

  return (
    <Fragment>
      {/* <DataContext value={props.userData}> */}
      <div className="container">
          <div className="name">
              {props.name}
          </div>
          <div className="exp">
              {props.experience}
          </div>
          <div className="click" onClick={clickHandler}>
              <Link to="/Profile">View Profile</Link>
          </div>
      </div>
      {/* </DataContext> */}
    </Fragment>
  );
};

export default Page;
