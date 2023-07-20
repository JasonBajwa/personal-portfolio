import React, { useEffect, useState } from 'react'
import "./Skills.scss";
import skillList from './SkillData';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";



export default function Skills() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);

    return (
        <div className='skills' id="skills">
            <div className="title">
                <h1>SKILLS</h1>
            </div>
            <div className="container">
                {skillList.map((d) => (
                    <div className='item'>
                        {/* <h3>{d.title}</h3> */}
                        <img
                            src={d.img}
                            alt=""
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}







