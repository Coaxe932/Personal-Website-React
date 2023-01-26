//Other Imports
import '../CSS/Home.css';
import React from "react";
import video from '../Videos/mixkit-glodfish-swimming-8498-medium.mp4';
import { useEffect, useState } from 'react';

//Components
import NavBlock from "./NavBlock";


const mobileQuery = window.matchMedia("max-width: 600px");

export default function Home() {

  const [currentTime, setCurrentTime] = useState(localStorage.getItem("videoTime"));




  return (
    <div>
      <NavBlock />
      <div className="Welcome">



        {!mobileQuery.matches ? <video id="myVideo" src={video} loop autoPlay>
          Your browser does not support HTML5 video.
        </video> : <p>Video not available on mobile</p>}



        <h1> Welcome to my Website! </h1>
        <p> Please feel free to look around. My contact information is in my resume (See link above) </p>
      </div>
    </div>
  )
}


