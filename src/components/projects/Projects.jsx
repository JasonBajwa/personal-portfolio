import React from 'react';
import './Projects.scss';
import ProjectData from "./ProjectData";

export default function Projects() {
    return (
        <div className='projects'>
            <div className="title">
                <h2>Projects</h2>
            </div>

            <div className="container">
                {ProjectData.map((d) => (
                    <div className='item'>
                        {/* <h3>{d.title}</h3> */}

                        <div className="project-content">
                            <div className="project-title">
                                <h3>{d.title}</h3>
                            </div>
                            <div className="project-desc">
                                <p>{d.desc}</p>
                            </div>
                            <div className="project-image">

                            </div>
                            <div className="project-link">
                                <a href={d.href}>Github Repo</a>
                            </div>

                        </div>


                        <img
                            src={d.img}
                            alt=""
                        />

                    </div>
                ))}
            </div>
        </div>
    )
}
