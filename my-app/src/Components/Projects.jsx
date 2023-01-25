//Other Imports
import '../CSS/Recipe.css';
import video from '../Videos/mixkit-glodfish-swimming-8498-medium.mp4';
import { useEffect, useState } from 'react';

// Components
import NavBlock from "./NavBlock";


export default function Projects() {

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
      }, 1000);
      return () => clearInterval(intervalId);
    }, [currentTime]);

    return (
        <div>
            <video id="myVideo" src={video} loop>
              Your browser does not support HTML5 video.
            </video>
            <NavBlock />
            <div className="Card--Container">
            </div>
        </div>
    )
}