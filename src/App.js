import "./App.css";
import axios from "axios";
import React, { useState, useEffect, Fragment } from "react";
import Page from "./components/Page";
import Profile from "./components/Profile/Profile";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [userData, setUserData] = useState([]);
  const [profData, setProfData] = useState([]);
  const [tableView, setTableView] = useState(true);

  useEffect(() => {
    axios
      .get("https://6171c3fac20f3a001705fecd.mockapi.io/api/users")
      .then(function (response) {
        setUserData(response.data);
        console.log(userData);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const clickHandler = (d) => {
    axios
      .get(`https://6171c3fac20f3a001705fecd.mockapi.io/api/users/${d}`)
      .then(function (response) {
        setProfData(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };


  return (
    <>
      {tableView &&
        userData.map((data) => (
          <div className="container">
            <div className="name">{data.name}</div>
            <div className="exp">{data.experience}</div>
            <button
              className="click"
              onClick={() => {
                clickHandler(data.id);
                setTableView(false);
              }}
            >
              View Profile
            </button>
          </div>
        ))}
      {console.log(userData)}
      {!tableView && (
        <Profile
          name={profData.name}
          experience={profData.experience}
          avatar={profData.avatar}
          skills={profData.skills}
          description={profData.description}
          shortBio={profData.shortBio}
          pastCompanies={profData.pastCompanies}
        />
      )}
    </>
  );
}

export default App;
