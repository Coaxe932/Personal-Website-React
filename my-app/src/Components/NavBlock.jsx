import React from 'react';
import '../CSS/NavBlock.css';

// Images
import me from '../images/Me.png'

// Components
import ImagesData from './ImagesData';

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
                <img src={meImage} className='Me--Image' alt='Me' onClick={ChangeImage}/>
            </div>
            <div className='RightComponent'>
            <ul className='Links'>
                <li>
                    <a href='/resume'>Resume</a>
                </li>
                <li>
                    <a href='/projects'>Projects</a>
                </li>
                <li>
                    <a href='/recipes'>Recipes</a>
                </li>
                <li>
                    <a href='/travel'>Travel</a>
                </li>
            </ul>
            </div>
        </nav>
    )
}