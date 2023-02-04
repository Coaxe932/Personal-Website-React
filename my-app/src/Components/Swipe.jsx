import React, { useState, useEffect } from "react";
import "../CSS/Swipe.css";

const Swipe = () => {
  const [x0, setX0] = useState(null);
  const [x1, setX1] = useState(null);
  const [cardContent, setCardContent] = useState(
    <img src="../images/Me-4.png" alt="Profile Image" />
  );

  const header = (
    <div className="Header--Container">
        <img src="../images/tinder.png" className="Header Image"></img>
        <p className="Header--text"> Ninder </p>
    </div>
  );

  useEffect(() => {
    const card = document.getElementById("card");
    card.addEventListener("touchstart", (e) => {
      setX0(e.touches[0].clientX);
    });
    card.addEventListener("touchend", (e) => {
      setX1(e.changedTouches[0].clientX);
      if (x0 - x1 > 50) {
        console.log("Swiped left");
        setCardContent("You can't swipe left here");
      } else if (x1 - x0 > 50) {
        console.log("Swiped right");
        setCardContent("It's a match! Text me +1(248) 382-8520");
      }
    });
  }, []);

  return (
    <div>
    <div>{header}</div>
    <div id="cardContainer">
      <div id="card">{cardContent}</div>
    </div>
    </div>
  );
};

export default Swipe;
