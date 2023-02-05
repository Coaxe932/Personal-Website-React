import React, { useState, useEffect } from "react";
import "../CSS/Swipe.css";

const Swipe = () => {
  const [x0, setX0] = useState(null);
  const [swipeDirection, setSwipeDirection] = useState(null);
  const [cardContent, setCardContent] = useState(
    <img src="../images/Me-4.png" alt="Profile Image" />
  );

  const location = () => {
    window.location.href = "https://nicholasradstake.com";
  };

  const header = (
    <div className="Header--Container">
      <img src="../images/tinder.png" className="Header Image" onClick={location}></img>
      <p className="Header--text"> Ninder </p>
    </div>
  );

  useEffect(() => {
    const card = document.getElementById("card");
    card.addEventListener("touchstart", (e) => {
      setX0(e.touches[0].clientX);
    });
    card.addEventListener("touchmove", (e) => {
      if (x0) {
        const currentX = e.touches[0].clientX;
        const swipeDifference = currentX - x0;
        card.style.transform = `translateX(${swipeDifference}px)`;
      }
    });
    card.addEventListener("touchend", (e) => {
      const x1 = e.changedTouches[0].clientX;
      card.style.transform = `translateX(0px)`;
      setX0(null);
      setSwipeDirection(null);

      if (x0 && x1) {
        const swipeDifference = x0 - x1;
        if (swipeDifference > 50) {
          setSwipeDirection("left");
        } else if (swipeDifference < -50) {
          setSwipeDirection("right");
        }
      }
    });
  }, []);

  return (
    <div>
      <div>{header}</div>
      <div className="Ninder--Desc"><p> Basically Tinder, but its just me and you can't swipe left </p></div>
      <div id="cardContainer">
        <div id="info">
          <h2>Nicholas Radstake    27</h2>
          <p>I sent you this because i think youre cute</p>
        </div>
        <div
          id="card"
          className={`card ${swipeDirection === "left" ? "left" : ""} ${swipeDirection === "right" ? "right" : ""
            }`}
        >
          {cardContent}
        </div>
      </div>
      {swipeDirection === "right" ? (
        <div id="match">It's a match! Text me +1(248) 382-8520</div>
      ) : null}
    </div>
  );
};

export default Swipe;
