import React, { useEffect, useState } from 'react'
import "./Skills.scss";
import skillList from './SkillData';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";



export default function Skills() {
    // const settings = {
    //     dots: true,
    //     slidesToShow: 3,
    //     infinite: true,
    //     speed: 500,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 1500,
    //     cssEase: "linear"
    // };
    // return (
    //     <div className='skills'>
    //         <h2 className='title'> SKILLS </h2>
    //         <Slider {...settings}>
    //             <div>
    //                 <h3>1</h3>
    //                 <img src='./assests/7_of_clubs.png'/>
    //             </div>
    //             <div>
    //                 <h3>2</h3>
    //             </div>
    //             <div>
    //                 <h3>3</h3>
    //             </div>
    //             <div>
    //                 <h3>4</h3>
    //             </div>
    //             <div>
    //                 <h3>5</h3>
    //             </div>
    //             <div>
    //                 <h3>6</h3>
    //             </div>
    //         </Slider>
    //     </div>
    // );

    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);

    // const skillList = [
    //     {
    //         id: "Java",
    //         title: "Java",
    //     },
    //     {
    //         id: "web",
    //         title: "Web App"
    //     },
    //     {
    //         id: "mobile",
    //         title: "Mobile App"
    //     },
    // ];

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







