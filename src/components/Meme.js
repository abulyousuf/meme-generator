import React from "react";
import "./Meme.css";
import { memesData } from "../memesData";

const Meme = () => {
  const getMemeImage = () => {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    console.log(randomNumber);
  };

  return (
    <main className="main">
      <div className="form">
        <input className="form--input" type="text" placeholder="Top text" />
        <input className="form--input" type="text" placeholder="Bottom text" />
        <button onClick={getMemeImage} className="form--btn">
          Get a new meme image 🖼
        </button>
      </div>
    </main>
  );
};

export default Meme;
