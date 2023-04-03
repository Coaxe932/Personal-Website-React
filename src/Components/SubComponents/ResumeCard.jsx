import React from "react";
import '../../CSS/ResumeCard.css';
import ResumeImg from '../../images/Resume.png';
import {Link} from 'react-router-dom';

export default function ResumeCard(){

    const ClickImg = () => {
        window.open('./Files/ResumePDF.pdf', '_blank');
      }

    return(
        <div>
            <div className="Card--Container--Resume">
            <Link className="Card-Resume">
            <img src={ResumeImg} className="image--Resume" onClick={ClickImg} alt="Resume"/>
            </Link>
            </div>
        </div>
    )
}