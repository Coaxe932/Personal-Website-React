//Other Imports
import '../CSS/Recipe.css';
import video from '../Videos/mixkit-glodfish-swimming-8498-medium.mp4';
import { useEffect, useState } from 'react';


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
      }else{
        console.log("Video element not found")
      }
      if (currentTime) vid.currentTime = currentTime;
      vid.play();
      const intervalId = setInterval(() => {
        setCurrentTime(vid.currentTime);
        localStorage.setItem("videoTime", vid.currentTime);
      }, 700);
      return () => clearInterval(intervalId);
    }, [currentTime]);

    return (
        <div>
            <video id="myVideo" src={video} loop autoPlay>
              Your browser does not support HTML5 video.
            </video>
            <NavBlock />
            <div className="Card--Container">
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            </div>
        </div>
    )
}