import React from "react";
import '../../CSS/ProjectCard.css';
import { NavLink } from 'react-router-dom';

export default function ProjectsCard(props) {

    const { id, title, file, description, address } = props;

    const ClickImg = () => {
            window.open(file, '_blank');
    }

    return (
        <NavLink to={`/${file}`} target="_blank">
            <div className="Card-Projects">
                <p className="info">{description}</p>
                <img src={props.coverImg} className="image--Projects" onClick={ClickImg} alt={title} />
            </div>
        </NavLink>
    )
}
