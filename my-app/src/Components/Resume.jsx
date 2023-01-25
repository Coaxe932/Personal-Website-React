//Other Imports
import video from '../Videos/mixkit-glodfish-swimming-8498-medium.mp4';
import { useEffect, useState } from 'react';
import '../CSS/Resume.css';

// Components
import ResumeCard from './SubComponents/ResumeCard';
import NavBlock from "./NavBlock";


export default function Resume() {

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
                <video id="myVideo" src={video} loop>
              Your browser does not support HTML5 video.
            </video>
                <ResumeCard />
            </div>
        )
}