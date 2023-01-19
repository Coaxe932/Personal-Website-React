import React from "react";
import '../../CSS/ResumeCard.css';
import ResumeImg from '../../images/Resume.png';
import {Link} from 'react-router-dom';

export default function ResumeCard(){

    const ClickImg = () => {
        window.location.assign('./Files/ResumePDF.pdf')
      }

    return(
        <div className="Container">
            <Link className="Card">
            <img src={ResumeImg} className="image" onClick={ClickImg} alt="Resume"/>
            </Link>
        </div>
    )
}