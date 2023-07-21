import React from 'react'
import './Experience.scss';
import ExperienceData from "./ExperienceData";

export default function () {
    return (
        <div className='experience'>
            {/* <div className="title">
                <h2>Experience</h2>
            </div> */}
            <div className="content">
                <div className="content-left">
                    <div className="about-me-title">
                        <h2>About Me</h2>
                    </div>
                    <div className="about-me-paragraph">
                        <p>
                        <span class="tab"></span>Hello there! I'm Jason Bajwa, a passionate and driven 4th-year Computer Science student at the  University of Georgia. As I approach graduation, I am eagerly looking forward to embarking on a fulfilling career in the tech industry.
                        </p>
                        <p>
                        <span class="tab"></span>With a strong foundation in programming, algorithms, and software development, I am ready to take on exciting challenges and contribute to innovative projects while drawing on the experience that I already succesfully excuted. I am eager to grow both personally and professionally.
                        </p>
                    </div>
                </div>
                <div className="content-right">
                    <div className="title">
                        <h2>Experience</h2>
                    </div>

                    {ExperienceData.map((d) => (
                        <div className='item'>
                            <div className="company">
                                <h3>{d.company}</h3>
                            </div>
                            <div className="time-and-location">
                                <h4>{d.time_frame}</h4>
                                <h5>{d.location}</h5>
                            </div>
                            <div className="role">
                                <h4>{d.role}</h4>
                            </div>
                            <div className="desc">
                                <ul className="bullet-list">
                                    {/* Split the desc string into an array of bullet points */}
                                    {d.desc.split('\n').map((bullet, index) => (
                                        <li key={index} className="bullet-item">{bullet}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}
