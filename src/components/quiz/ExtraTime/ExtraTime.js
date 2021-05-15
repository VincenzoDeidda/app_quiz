import React, { useState, useEffect } from "react";

const ExtraTime = ({extTime, setExtTime, timeLeft, setTimeLeft }) => {
  

  const clickHandler = () => {
    setExtTime(false);
    setTimeLeft(timeLeft+10)

  };

  return (
    <div>
      {extTime ? (
        <button
          id="bnt-1"
          className="btn btn-danger btn-lg active"
          onClick={clickHandler}
        >
          extraTime 10s
        </button>
      ) : (
        <button
          id="bnt-1"
          disabled
          className="btn btn-danger btn-lg active"
          onClick={clickHandler}
        >
          {" "}
          extraTime 10s
        </button>
      )}
    </div>
  );
};

export default ExtraTime;
