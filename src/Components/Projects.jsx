import React, { useEffect, useState } from 'react';

//Other Imports
import '../CSS/Projects.css';
import video from '../Videos/mixkit-glodfish-swimming-8498-medium.mp4';

// Components
import NavBlock from "./NavBlock";
import ProjectsCard from './SubComponents/ProjectCard';
import ProjectsData from './Data/ProjectsData';

export default function Projects() {

  const [currentTime, setCurrentTime] = useState(localStorage.getItem("videoTime"));

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 600px)");
    if (!mobileQuery.matches) {
      const vid = document.getElementById("myVideo");
      if (vid) {
        if (currentTime) vid.currentTime = currentTime;
        vid.play();
      } else {
        console.log("Video element not found")
      }
      const intervalId = setInterval(() => {
        setCurrentTime(vid.currentTime);
        localStorage.setItem("videoTime", vid.currentTime);
      }, 700);
      return () => clearInterval(intervalId);
    }
  }, [currentTime]);

  const Card_Element = ProjectsData.map(item => {
    return (<ProjectsCard
      key={item.id}
      {...item}
    />)
  }
  )

  const isMobile = window.matchMedia("(max-width: 600px)").matches;

  return (
    <div>
      {!isMobile ? <video id="myVideo" src={video} loop autoPlay>
        Your browser does not support HTML5 video.
      </video> : <p>Video not available on mobile</p>}
      <NavBlock />
      <div className="Card--Container">
        {Card_Element}
      </div>
    </div>
  )
}