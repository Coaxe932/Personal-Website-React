import React from 'react';
import '../CSS/NavBlock.css';
import { Link } from 'react-router-dom';


// Components
import ImagesData from './Data/ImagesData';



export default function NavBlock() {


    const [meImage, setMeImage] = React.useState("../images/Me.png")


    function ChangeImage() {
        const MeArray = ImagesData.images
        const randomNumber = Math.floor(Math.random() * MeArray.length)
        setMeImage(MeArray[randomNumber].url)
    }

    return (
        <nav className='NavBar--Container'>
            <div className='LeftComponent'>
                <img src={meImage} className='Me--Image' alt='Me' onClick={ChangeImage} />
            </div>
            <div className='RightComponent'>
                <ul className='Links'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/resume'>Resume</Link>
                    </li>
                    <li>
                        <Link to='/recipes'>Recipes</Link>
                    </li>
                    <li>
                        <Link to='/travel'>Travel</Link>
                    </li>
                    <li>
                        <Link to='/projects'>Projects</Link>
                    </li>
                    <li>
                        <Link to='/github'>Github</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}