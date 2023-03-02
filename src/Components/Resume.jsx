import React from 'react';


//Other Imports
import video from '../Videos/mixkit-glodfish-swimming-8498-medium.mp4';
import { useEffect, useState } from 'react';
import '../CSS/Resume.css';

// Components
import ResumeCard from './SubComponents/ResumeCard';
import NavBlock from "./NavBlock";


const mobileQuery = window.matchMedia("max-width: 600px");

export default function Resume() {
  const [currentTime, setCurrentTime] = useState(localStorage.getItem("videoTime"));

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 600px)");
    if (!mobileQuery.matches) {
      const vid = document.getElementById("myVideo");
      if (vid) {
        if (currentTime) vid.currentTime = currentTime;
        vid.play();
      } else {
        console.log("Mobile, video not found");
      }
      const intervalId = setInterval(() => {
        setCurrentTime(vid.currentTime);
        localStorage.setItem("videoTime", vid.currentTime);
      }, 700);
      return () => clearInterval(intervalId);
    }
  }, [currentTime]);



  const isMobile = window.matchMedia("(max-width: 600px)").matches;

  return (
    <div>
      {!isMobile ? <video id="myVideo" src={video} loop autoPlay>
        Your browser does not support HTML5 video.
      </video> : console.log("Mobile")}
      <NavBlock />
      <ResumeCard />
    </div>
  );
}