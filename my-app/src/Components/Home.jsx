//Other imports
import '../CSS/Home.css';
import React from "react";
import video from '../Videos/mixkit-glodfish-swimming-8498-medium.mp4';
import { useEffect, useState } from 'react';

//Components
import NavBlock from "./NavBlock";

export default function Home() {

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
                <NavBlock />
                <div className="Welcome">
                <video id="myVideo" src={video} loop>
              Your browser does not support HTML5 video.
            </video>
                    <h1> Welcome to my Website! </h1>
                    <p> Please feel free to look around. My contact information is in my resume (See link above) </p>
                </div>
            </div>
        )
}
