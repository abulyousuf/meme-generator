import React, { useState } from "react";
import "./Meme.css";
import { memesData } from "../memesData";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  const getMemeImage = () => {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

    setMeme(prevMeme => ({ ...prevMeme, randomImage: url }));
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
      <img src={meme.randomImage} alt="Meme" className="meme--image" />
    </main>
  );
};

export default Meme;
