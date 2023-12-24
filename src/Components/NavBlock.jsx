//Other Imports
import React from 'react';
import '../CSS/NavBlock.css';
import { NavLink } from 'react-router-dom';


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
                <img src={meImage} className='Me--Image--Navblock' alt='Me' onClick={ChangeImage} />
            </div>
            <div className='RightComponent'>
                <ul className='Links'>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/resume'>Resume</NavLink>
                    </li>
                    <li>
                        <NavLink to='/recipes'>Recipes</NavLink>
                    </li>
                    <li>
                        <NavLink to='/travel'>Travel</NavLink>
                    </li>
                    <li>
                        <NavLink to='/projects'>Projects</NavLink>
                    </li>
                    <li>
                    <NavLink to="/blog">Blog</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}