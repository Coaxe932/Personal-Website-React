import React from "react";
import '../../CSS/ProjectCard.css';
import { Link } from 'react-router-dom';

export default function ProjectsCard(props) {

    const { id, title, file, description, address } = props;

    const ClickImg = () => {
            window.open(file, '_blank');
    }

    return (
        <Link to={`/${address}`}>
            <div className="Card-2">
                <p className="info">{description}</p>
                <img src={props.coverImg} className="image" onClick={ClickImg} alt={title} />
            </div>
        </Link>
    )
}
