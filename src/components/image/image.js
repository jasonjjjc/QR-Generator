import React from "react";
import "./image.css";

function Image({ site, color }) {
  return (
    <img
      src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${site}&bgcolor=${color}`}
      className="App-logo"
      alt="logo"
    />
  );
}

export default Image;
