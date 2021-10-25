import React, { useState } from "react";
import "./Calender.css";
import Calendar from "react-calendar";

const Calender = () => {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <div className="containerC">
          <div className="calTitle">Book Your Session</div>
        <div className="calender">
          <Calendar onChange={onChange} value={value} />
        </div>
      </div>
    </>
  );
};

export default Calender;
