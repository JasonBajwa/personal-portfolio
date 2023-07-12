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
                    <a href="#portfolio"> PORTFOLIO </a>
                </li>

                <li onClick={handleClick}>
                    <a href="#works"> WORKS </a>
                </li>

                <li onClick={handleClick}>
                    <a href="#testimonials"> TESTIMONIALS </a>
                </li>

                <li onClick={handleClick}>
                    <a href="#contact"> CONTACT </a>
                </li>

            </ul>
        </div>
    )
}
