import React from "react";

export default function Header({isActive}){
    const style1 = {animation: "appear 1s ease-in-out", display: "block", ttransform: "translateY(0) scaleY(1)"}
    const style2 = {display:"none"}
    return (
        <header style={isActive===1 ? style1: style2} className="section sec1 header">
            <div className="header-content">
                <div className="left-header">
                    <div className="h-shape"></div>
                    <div className="image">
                        <img src="https://sans1812.pythonanywhere.com/static/img/me.jpg" alt=""/>
                    </div>
                </div>
                <div className="right-header">
                    <h1 className="name">
                        Hi, I'm <span>Sanskar Jain </span>
                         A Web Developer
                    </h1>
                    <p>
                        I'm a Web Developer, I love to create beautiful and functional websites.
                        I'm a final year B.tech student at IIT BHU, Varanasi. Doing my B.tech in civil engineering
                        and making awesome websites side by side.
                    </p>
                    <div className="btn-con">
                        <a href="https://drive.google.com/file/d/1_u38GaTfwZZnzMyZWkjc2NZtohZWaVER/view?usp=sharing" className="main-btn">
                            <span className="btn-text">Download CV</span>
                            <span className="btn-icon"><i className="fas fa-download"></i></span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}