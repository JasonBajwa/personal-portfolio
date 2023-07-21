import React from 'react'
import './SideMenu.scss'

export default function SideMenu({menuOpen, setMenuOpen}) {

    const handleClick = () => {
        setMenuOpen(false); // Set menuOpen to false when the link is clicked
      };

    return (
        <div className={"sideMenu " + (menuOpen && "active")}>
            <ul>
                <li onClick={handleClick}>
                    <a href="#intro"> HOME </a>
                </li>

                <li onClick={handleClick}>
                    <a href="#aboutMe"> ABOUT ME AND EXPERIENCE </a>
                </li>

                <li onClick={handleClick}>
                    <a href="#projects"> PROJECTS </a>
                </li>

                <li onClick={handleClick}>
                    <a href="#skills"> SKILLS </a>
                </li>

                <li onClick={handleClick}>
                    <a href="#education"> EDUCATION </a>
                </li>

                <li onClick={handleClick}>
                    <a href="#contact"> CONTACT </a>
                </li>

            </ul>
        </div>
    )
}
