import React from "react";
import "./Videos.css";

function Video({name, source, timestamp}) {
  return (
    <div className="vid">
      <div>
          <h5>{name}</h5>
          <p>12 mins</p>
      </div>
      <video controls src={source}></video>
    </div>
  );
}

export default Video;
