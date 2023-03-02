import React, { useEffect, useState } from 'react';

//Other Imports
import '../CSS/Recipe.css';
import video from '../Videos/mixkit-glodfish-swimming-8498-medium.mp4';

// Components
import RecipeCard from "./SubComponents/RecipeCard";
import NavBlock from "./NavBlock";

export default function Recipes() {
  const [currentTime, setCurrentTime] = useState(localStorage.getItem("videoTime"));

  useEffect(() => {
    const vid = document.getElementById("myVideo");
    if (vid) {
      if (currentTime) vid.currentTime = currentTime;
      vid.play();
    } else {
      console.log("Mobile, Video not found");
    }

    const intervalId = setInterval(() => {
      if (vid) {
        setCurrentTime(vid.currentTime);
        localStorage.setItem("videoTime", vid.currentTime);
      }
    }, 700);

    return () => clearInterval(intervalId);
  }, [currentTime]);

  const isMobile = window.matchMedia("(max-width: 600px)").matches;

  return (
    <div>
      {!isMobile ? <video id="myVideo" src={video} loop autoPlay>
        Your browser does not support HTML5 video.
      </video> : console.log("Mobile")}
      <NavBlock />
      <div className="Card--Container">
        <RecipeCard />
      </div>
    </div>
  );
}
