import React, { useState, useEffect } from "react";
import "../../CSS/Ninder.css";

const Ninder = () => {
  const [x0, setX0] = useState(null);
  const [x1, setX1] = useState(null);
  const [cardStyles, setCardStyles] = useState({});
  const [cardContent, setCardContent] = useState(
    <img src="../images/Me-4.png" alt="Profile Image" />
  );
  const [showFilter, setShowFilter] = useState(false);

  function ClickFunc() {
    window.location.href = "http://nicholasradstake.com";
  }

  function handleFilterClick() {
    setShowFilter(!showFilter);
  }

  const header = (
    <div className="Header--Container">
        <img src="../images/tinder.png" onClick={ClickFunc} className="Tinder--Img"></img>
        <p className="Header--text"> Ninder </p>
        <img src="../images/Filter--Icon.jpg" onClick={handleFilterClick} className="Filter"></img>
    </div>
  );

  useEffect(() => {
    const card = document.getElementById("card");
    let initialX = 0;

    card.addEventListener("touchstart", (e) => {
      setX0(e.touches[0].clientX);
      initialX = e.touches[0].clientX;
    });

    card.addEventListener("touchmove", (e) => {
      setCardStyles({
        transform: `translateX(${e.touches[0].clientX - initialX}px)`,
      });
    });

    card.addEventListener("touchend", (e) => {
      setX1(e.changedTouches[0].clientX);
      let cardWidth = card.offsetWidth;
      let swipeDistance = x1 - x0;

      const threshold = 100;

      if ((e.changedTouches[0].clientX) < threshold) {
        console.log("Swiped left");
        console.log(e.changedTouches[0].clientX);
        setCardStyles({ transform: "translateX(0)" });
        setCardContent(
        <div id="Reject">
        <p> You can't swipe left here </p>
      </div>);
      } else if ((e.changedTouches[0].clientX)> threshold) {
        console.log("Swiped right");
        console.log(swipeDistance);
        setCardStyles({ transform: "translateX(0)" });
        setCardContent(
          <div id="Match">
            <p> It's a Match! Text me +1(248) 382-8520</p>
          </div>
        );
      } else {
        setCardStyles({ transform: "translateX(0)" });
      }
    });
  }, []);

  return (
    <div>
      <div>{header}</div>
      <p className="TinderTitle"> Basically tinder but its just me and you can't swipe left </p>
      <div id="cardContainer">
        <div id="card" style={cardStyles}>
          {cardContent}
        </div>
      </div>
      {showFilter && (
        <div className="FilterMenu">
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Ninder;
