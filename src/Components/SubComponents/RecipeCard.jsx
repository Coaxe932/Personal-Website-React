import React from "react";
import '../../CSS/RecipeCard.css';
import RecipeImg from '../../images/Estofado-Pollo.png';
import {Link} from 'react-router-dom';

export default function RecipeCard(){

    const ClickImg = () => {
        window.open('./Files/Estofado-Recipe.pdf', '_blank');
      }

    return(
        <div className="Container--Recipe">
            <Link className="Card--Recipe">
            <img src={RecipeImg} className="image--Recipe" onClick={ClickImg} alt="Recipe"/>
            </Link>
        </div>
    )
}