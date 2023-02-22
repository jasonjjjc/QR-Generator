import React from "react";
import "./button.css";

function Button({ onClick }) {
  return (
    <button className="button-19" onClick={onClick}>
      {" "}
      Submit{" "}
    </button>
  );
}

export default Button;
