import React from 'react'
import image1 from './images/logo.png'

const navbar = () => {
    return (
         <nav className = "navbar"> 
            <div className =  "logo">
                <img src = {image1} alt = ""></img>
            </div>
            <ul className = "menu">
                <li><a href = "#home">Home</a></li>
                <li><a href = "#Curriculum">Curriculum</a></li>
                <li><a href = "#Services">Services</a></li>
                <li><a href = "#About">About Us</a></li>
                <li><a href = "#contac">Contact Us</a></li>

            </ul>
            <div class="menu-btn">
                <a href="#home" class="active">
                    
                </a>
                <a href="#home" class="icon" onclick="myFunction()">
                <i class="fa fa-bars"></i>
                </a>
            </div>  
        </nav>
    )
}

export default navbar;
