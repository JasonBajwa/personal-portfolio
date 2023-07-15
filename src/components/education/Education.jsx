import React from 'react';
import "./Education.scss";

export default function Education() {
    return (
        <div className='Education'>
            <div className="container">
                <div className="header-edu">
                    <h1>EDUCATION</h1>
                </div>
                <div className="first-edu">
                    <div className="first-edu-logo">
                        <img
                            src="./assests/UGAlogo_TopShield_CW_MARCM.png"
                            alt=""
                            className='uga-logo'
                        />
                    </div>
                    <div className="first-edu-content">
                        <div className="first-edu-name">
                            <h2>University of Georgia</h2>
                        </div>
                        <div className="duration">
                            <h2>2022-Present</h2>
                            <h3>Expected Graduation: May 2024 </h3>
                        </div>
                        <div className="content">
                            <div className="gpa">
                                <h3>GPA</h3>
                                <ul>
                                    <li>3.9</li>
                                </ul>
                            </div>
                            <div className="relevant-coursework">
                                <h3>Relevant Coursework</h3>
                                <ul>
                                    <li>Intro to Theory of Computing, Data Structures, Web Programming,
                                        Computing Ethics and Society
                                    </li>
                                </ul>
                            </div>
                            <div className="honors">
                                <h3>Honors</h3>
                                <ul>
                                    <li>Dean’s List</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="second-edu">
                    <div className="second-edu-logo">
                        <img
                            src="./assests/UGAlogo_TopShield_CW_MARCM.png"
                            alt=""
                            className='uga-logo'
                        />
                    </div>
                    <div className="second-edu-content">
                        <div className="second-edu-name">
                            <h2>Georgia State University</h2>
                        </div>
                        <div className="duration">
                            <h2>2020-2022</h2>
                            {/* <h3>Expected Graduation: May 2024 </h3> */}
                        </div>
                        <div className="content">
                            <div className="gpa">
                                <h3>GPA</h3>
                                <ul>
                                    <li>3.9</li>
                                </ul>
                            </div>
                            <div className="relevant-coursework">
                                <h3>Relevant Coursework</h3>
                                <ul>
                                    <li>Intro to Theory of Computing, Data Structures, Web Programming,
                                        Computing Ethics and Society
                                    </li>
                                </ul>
                            </div>
                            <div className="honors">
                                <h3>Honors</h3>
                                <ul>
                                    <li>Dean’s List</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
