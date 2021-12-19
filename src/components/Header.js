import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <img src="./images/troll-face.png" alt="" className="header--image" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--subtitle">React Project</h4>
    </header>
  );
};

export default Header;
