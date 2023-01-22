import React from "react";
import '../../CSS/RecipeCard.css';
import RecipeImg from '../../images/Estofado-Pollo.png';
import {Link} from 'react-router-dom';

export default function RecipeCard(){

    const ClickImg = () => {
        window.location.assign('./Files/Estofado-Recipe.pdf');
      }

    return(
        <div className="Container">
            <Link className="Card">
            <img src={RecipeImg} className="image" onClick={ClickImg} alt="Recipe"/>
            </Link>
        </div>
    )
}