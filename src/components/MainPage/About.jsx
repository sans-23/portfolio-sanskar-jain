import React from "react";
import TimelineItem from "./TimelineItem";

export default function About({isActive}){
    const style1 = {animation: "appear 1s ease-in-out", display: "block", ttransform: "translateY(0) scaleY(1)"}
    const style2 = {display:"none"}
    return(
        <section style={isActive===1 ? style1: style2}>
            <div class="main-title">
                <h2>About <span>me</span><span class="bg-text">my stats</span></h2>
            </div>
            <div class="about-container">
                <div class="left-about">
                    <h4>Information About me</h4>
                    <p>
                    Hi, this is Sanskar Jain. I'm persuaing my B.tech in Civil Engineering at IIT BHU.
                    </p>
                    <div class="btn-con">
                        <a href="https://drive.google.com/file/d/1_u38GaTfwZZnzMyZWkjc2NZtohZWaVER/view?usp=sharing" class="main-btn">
                            <span class="btn-text">Download CV</span>
                            <span class="btn-icon"><i class="fas fa-download"></i></span>
                        </a>
                    </div>
                </div>
                <div class="right-about">
                    <div class="about-item">
                        <div class="abt-text">
                            <p class="large-text">1600+</p>
                            <p class="small-text">Lichess  <br /> Rating</p>
                        </div>
                    </div>
                    <div class="about-item">
                        <div class="abt-text">
                            <p class="large-text">1200+</p>
                            <p class="small-text">Codeforces <br /> Rating</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="about-stats">
                <h4 class="stat-title">My Skills</h4>
                <div class="progress-bars">
                    <div class="progress-bar">
                        <p class="prog-title">html5</p>
                        <div class="progress-con">
                            <p class="prog-text">80%</p>
                            <div class="progress">
                                <span class="html"></span>
                            </div>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <p class="prog-title">css3</p>
                        <div class="progress-con">
                            <p class="prog-text">85%</p>
                            <div class="progress">
                                <span class="css"></span>
                            </div>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <p class="prog-title">javascript</p>
                        <div class="progress-con">
                            <p class="prog-text">75%</p>
                            <div class="progress">
                                <span class="js"></span>
                            </div>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <p class="prog-title">ReactJS</p>
                        <div class="progress-con">
                            <p class="prog-text">65%</p>
                            <div class="progress">
                                <span class="react"></span>
                            </div>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <p class="prog-title">Django</p>
                        <div class="progress-con">
                            <p class="prog-text">77%</p>
                            <div class="progress">
                                <span class="django"></span>
                            </div>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <p class="prog-title">Python</p>
                        <div class="progress-con">
                            <p class="prog-text">60%</p>
                            <div class="progress">
                                <span class="python"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h4 class="stat-title">My Timeline</h4>
            <div class="timeline">
                <TimelineItem duration="15May'22 - 30June'22" role="Frontend web developer Intern" company="boltiot"/> 
                <TimelineItem duration="2019 - present" role="Member" company="Chess Club, IIT BHU"/>
                <TimelineItem duration="2019 - present" role="Core Team" company="Sattvik Mess, IIT BHU"/>
                <TimelineItem duration="Oct'19 - Oct'19" role="Game Coordinator" company="Chess, Spardha'19"/>
                <TimelineItem duration="2019 - present" role="B.tech Civil Engineering" company="IIT BHU, Varanasi"/>
                <TimelineItem duration="2017 - 2019" role="Student" company="Allen, Kota"/>
                <TimelineItem duration="2018 - 2019" role="Secondary Education" company="Sarvodaya Sr. sec. School"/>
                <TimelineItem duration="2016 - 2017" role="Higher Edaucation" company="Nirmala Convent Hr. Sec. School"/>
            </div>
        </section>
    )
}