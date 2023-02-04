import React from "react";
import '../../CSS/ProjectCard.css';
import {Link} from 'react-router-dom';

export default function ProjectsCard(props){

    const {id, name, file, description} = props;

    const ClickImg = () => {
        window.open(props.file, '_blank');
      }

    return(

        
        <div>
            <Link className="Card-2">
                <p className="info">{props.description}</p>
            <img src={props.coverImg} className="image" onClick={ClickImg} alt={props.title}/>
            </Link>
        </div>
    )
}