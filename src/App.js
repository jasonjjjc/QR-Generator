import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import Button from "./components/button/button";
import Input from "./components/input/input";
import Image from "./components/image/image";
import "./App.css";

function App() {
  const [site, setSite] = useState("insert-link-here");
  let value = "";
  const [color, setColor] = useState("386641");

  useEffect(() => {
    async function getUrl() {
      const response = await fetch(
        `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${site}&bgcolor=${color}`
      );
      console.log(response);
      setSite(response);
    }
    getUrl();
  }, []);

  // when the button is clicked set the site to the site that
  // has been entered into the input has been entered into input

  function handleClick(e) {
    e.preventDefault();
    setSite(value);
    console.log(value);
  }

  function getInputText(e) {
    value = e.target.value;
    console.log(value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <title>SOC QR</title>
        <Image site={site} color={color} />

        <p>Input URL below to receive your QR code</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        <Input newSite={getInputText} />
        <Button onClick={handleClick} site={site} />
      </header>
    </div>
  );
}

export default App;
