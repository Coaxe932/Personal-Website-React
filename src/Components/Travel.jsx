import React from 'react';


//Other Imports
import '../CSS/Travel.css';
import video from '../Videos/mixkit-glodfish-swimming-8498-medium.mp4';
import { useEffect, useState } from 'react';
import TravelData from './Data/TravelData';

// Components
import NavBlock from "./NavBlock";
import TravelCard from './SubComponents/TravelCard';

const mobileQuery = window.matchMedia("max-width: 600px");

export default function Travel() {
  const [currentTime, setCurrentTime] = useState(localStorage.getItem('videoTime'));


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


  const Card_Element = TravelData.map(item => {
    return (<TravelCard
      key={item.id}
      {...item}
    />)
  }
  )



  

  return ( 
    <div>
      {!isMobile ? <video id="myVideo" src={video} loop autoPlay>
        Your browser does not support HTML5 video.
      </video> : console.log("Mobile")}
      <NavBlock />
      <div className="Card--Container--Travel">
        {Card_Element}
      </div>
    </div>
  );
}

