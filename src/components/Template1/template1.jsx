import React, { Component, useEffect, useState } from "react";
import "react-bootstrap";
import Button from 'react-bootstrap/Button'
// import ProgressBar from 'react-bootstrap/ProgressBar'
import ProgressBar from "@ramonak/react-progress-bar";
import { FaDownload,FaFacebookF,FaTwitter,FaLinkedinIn,FaUniversity,FaFlag } from "react-icons/fa";
import "./template1.css"

const TemplateOne = ({dummyData=false}) => {

    const [name, setName] = useState('');

    const setNameValue = (event)=> {
        setName(event.target.value);
    }
    return ( 
        <div className="background">
               <div className="resume-container">
                    <div className="header-buttons">
                        <button className="btn-default">
                        <a href="#">
                            <FaDownload/>
                        {/* <i className="fas fa-download"></i> */}
                        <span>Download my resume</span>
                        </a>
                        </button>
                    </div>
                    <div className="profile-intro">
                        <div className="profile">
                            <div className="profile-pic">
                                <img src="	http://www.dotrex.co/vertica/themes/img/avatar-James.jpg" alt="" /> 
                            </div>
                            <div className="about">
                                <h1 className="intro-title1">Hi, i'm <span className="intro-title1-name">James Rex!</span></h1>
                                <h2 class="intro-title2">Web Developer</h2>
                                <p className="intro-des"><strong>Turpis, sit amet iaculis dui consectetur at.</strong> Cras sagittis molestie orci. <strong>Suspendisse ut laoreet mi</strong>. Phasellus eu tortor vehicula, blandit enim eu, auctor massa. Nulla ultricies tortor dolor, sit amet suscipit enim <strong>condimentum id</strong>. Etiam eget iaculis tellus.  Varius sit amet.</p>
                            </div>
                        </div>
                    </div>
                    <div className="info-wrap">
                        <section className="profile-infos">
                            <div className="wrapper">
                                <div className="title-content">
                                     <h2 class="section-title">Profile</h2>
                                </div>
                                <div className="line-content">
                                    <h3 className="section-item-title-1">Full Name</h3>
                                    {!dummyData && <input placeholder="Enter your name" onChange={(e)=> setNameValue(e)}/>}
                                    <p>{dummyData ? 'James Willians Rex' : name}</p>
                                </div>
                                <div className="line-content">
                                    <h3 className="section-item-title-1">Born</h3>
                                    <p>30 Aug 1991 - Austin, U.S.A</p>
                                </div>
                                <div className="line-content">
                                    <h3 className="section-item-title-1">Email</h3>
                                    <p>john@dotrex.co</p>
                                </div>
                                <div className="line-content">
                                    <h3 class="section-item-title-1">Find Me On</h3>
                                    <div className="btn-default">
                                        <a href="#"className="btn-default"><FaFacebookF/></a>
                                    </div>
                                    <div className="btn-default">
                                        <a href="#" className="btn-default"><FaTwitter/></a>
                                    </div>
                                    <div className="btn-default">
                                        <a href="#" className="btn-default"><FaLinkedinIn/></a>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="education">
                            <div className="wrapper">
                                <div className="title-content">
                                    <h2 className="section-title">Education</h2>
                                </div>
                                <div className="line-content">
                                <h3 className="section-item-title-1">GRAPHIC DESIGN</h3>
                                <h4 className="graduation-time"><FaUniversity/> St. Patrick University (2 Years Course) - <span class="graduation-date">Graduation May 2013</span></h4>
                                <div className="graduation-description">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                                </div> 
                                <div className="line-content">
                                <h3 className="section-item-title-1">GRAPHIC DESIGN</h3>
                                <h4 className="graduation-time"><FaUniversity/> St. Patrick University (2 Years Course) - <span class="graduation-date">Graduation May 2013</span></h4>
                                <div className="graduation-description">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                                </div> 
                                <div className="line-content">
                                <h3 className="section-item-title-1">GRAPHIC DESIGN</h3>
                                <h4 className="graduation-time"><FaUniversity/> St. Patrick University (2 Years Course) - <span class="graduation-date">Graduation May 2013</span></h4>
                                <div className="graduation-description">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                                </div>   
                            </div>
                        </section>
                        <section className="work-experience">
                            <div className="wrapper">
                                <div className="title-content">
                                <h2 className="section-title">Work Experience</h2> 
                                </div>
                                <div className="line-content">
                                <h3 className="section-item-title-1">Black Tie Corp</h3>
                                <h4 className="job"><FaFlag/> Web Designer - <span class="job-date">June 2012 - Current</span></h4>
                                <div className="job-description">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                                </div>
                                <div className="line-content">
                                <h3 className="section-item-title-1">Oasis Ltda.</h3>
                                <h4 className="job"><FaFlag/>  Front-end Developer - <span class="job-date">Jan 2010 - Apr 2012</span></h4>
                                <div className="job-description">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                                </div>
                                <div className="line-content">
                                <h3 className="section-item-title-1">Oasis Ltda.</h3>
                                <h4 className="job"><FaFlag/>  Front-end Developer - <span class="job-date">Jan 2010 - Apr 2012</span></h4>
                                <div className="job-description">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                                </div>
                            </div>
                        </section>
                        <section className="skills">
                            <div className="wrapper">
                                <div className="title-content">
                                <h2 className="section-title">Skills</h2>
                                </div>
                                <div className="line-content">
                                <h3 className="section-item-title-1">Professional Skills</h3>
                                <ul className="skills-list">
                                    <li>
                                        <div className="progress">
                                        <span className="progress-type">Comunication</span>
                                        {/* <span class="progress-completed">70%</span> */}
                                            <ProgressBar completed="70"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="progress">
                                        <span className="progress-type">Leadership</span>
                                        {/* <span class="progress-completed">70%</span> */}
                                            <ProgressBar completed="90"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="progress">
                                        <span className="progress-type">Confidence</span>
                                        {/* <span class="progress-completed">70%</span> */}
                                            <ProgressBar completed="85"/>
                                        </div>
                                    </li>
                                </ul>
                                </div>
                                <div className="line-content">
                                <h3 className="section-item-title-1">Software Skills</h3>
                                <ul className="skills-list">
                                    <li>
                                        <div className="progress">
                                        <span className="progress-type">Adobe Photoshop</span>
                                        {/* <span class="progress-completed">70%</span> */}
                                            <ProgressBar completed="90"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="progress">
                                        <span className="progress-type">Adobe Illustrator</span>
                                        {/* <span class="progress-completed">70%</span> */}
                                            <ProgressBar completed="60"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="progress">
                                        <span className="progress-type">Adobe Fireworks</span>
                                        {/* <span class="progress-completed">70%</span> */}
                                            <ProgressBar completed="40"/>
                                        </div>
                                    </li>
                                </ul>
                                </div>
                                <div className="line-content">
                                <h3 className="section-item-title-1">Code Skills</h3>
                                <ul className="skills-list">
                                    <li>
                                        <div className="progress">
                                        <span className="progress-type">HTML5 / CSS3</span>
                                        {/* <span class="progress-completed">70%</span> */}
                                            <ProgressBar completed="90"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="progress">
                                        <span className="progress-type">Javascript</span>
                                        {/* <span class="progress-completed">70%</span> */}
                                            <ProgressBar completed="60"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="progress">
                                        <span className="progress-type">PHP</span>
                                        {/* <span class="progress-completed">70%</span> */}
                                            <ProgressBar completed="40"/>
                                        </div>
                                    </li>
                                </ul>
                                </div>
                            </div>
                        </section>
                        <section className="interests">
                                <div className="wrapper">
                                <div className="title-content">
                                <h2 className="section-title">Interests</h2> 
                                </div>
                                <div className="line-content">
                                <h3 className="section-item-title-1">Art</h3>
                                <div className="job-description">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                                </div>
                                <div className="line-content">
                                <h3 className="section-item-title-1">Games</h3>
                                <div className="job-description">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                                </div>
                                <div className="line-content">
                                <h3 className="section-item-title-1">Books</h3>
                                <div className="job-description">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                                </div>
                            </div>
                        </section>
                        <section className="contact">
                            <div className="wrapper">
                                <div className="title-content">
                                    <h2 className="section-title">Contact</h2> 
                                </div>
                                <div className="line-content">
                                    <div className="contact-infos">
                                    <h4 className="contact-subtitle-1">Address</h4>
                                    <p>451 Lorem Ipsum, Austin - Texas - U.S.A</p>
                                    <h4 className="contact-subtitle-1">Phone</h4>
                                    <p>+61 3 8376 6284</p>
                                    <h4 className="contact-subtitle-1">Mail</h4>
                                    <p>john.Rex@dotrex.com</p>
                                    </div>
                                </div>
                            </div>
                        </section> 
                        <div className="bottom"></div> 
                    </div>
                </div>
        </div>
     );
}
 
export default TemplateOne;