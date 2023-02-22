import React from "react";
import { useState } from "react";
import "./input.css";

function Input({ newSite }) {
  return <input className="Input" onChange={newSite}></input>;
}

export default Input;
