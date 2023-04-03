import React, { useRef, useState } from "react";
import "../../CSS/TravelCard.css";
import { NavLink } from "react-router-dom";

export default function TravelCard(props) {
  const { id, title, file, description, address, coverImg, video } = props;
  const videoRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  

  const playVideo = () => {
    setIsHovering(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const pauseVideo = () => {
    setIsHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className="Card-Travel" onMouseEnter={playVideo} onMouseLeave={pauseVideo}>
        <p className="info--Travel">{description}</p>
        {!isHovering ? (
          <img src={coverImg} className="image--Travel" alt={title} />
        ) : (
          file === "video" && (
            <video ref={videoRef} className="card-video" loop>
              <source src={video} type="video/mp4" />
            </video>
          )
        )}
    </div>
  );
}
