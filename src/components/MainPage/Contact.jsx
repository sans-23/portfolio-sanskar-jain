import React from "react";

export default function Contact({isActive}){
    const style1 = {animation: "appear 1s ease-in-out", display: "block", ttransform: "translateY(0) scaleY(1)"}
    const style2 = {display:"none"}
    return(
        <section style={isActive==1 ? style1: style2} className="section sec5 contact"> 
            <div class="contact-container">
                <div class="main-title">
                    <h2>Contact <span>Me</span><span class="bg-text">Contact</span></h2>
                </div>
                <div class="contact-content-con">
                    <div class="left-contact">
                        <h4>Contact me here</h4>
                        <p>
                            Drop a message of appriciation, report bugs, or just Say Hello.
                        </p>
                        <div class="contact-info">
                            <div class="contact-item">
                                <div class="icon">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <span>Location</span>
                                </div>
                                <p>
                                    : Varanasi, India
                                </p>
                            </div>
                            <div class="contact-item">
                                <div class="icon">
                                    <i class="fas fa-envelope"></i>
                                    <span>Email</span>
                                </div>
                                <p>
                                    <span>: sanskarjain@protonmail.com</span>
                                </p>
                            </div>
                            <div class="contact-item">
                                <div class="icon">
                                    <i class="fas fa-phone"></i>
                                    <span>Mobile Number</span>
                                </div>
                                <p>
                                    <span>: 6263927731</span>
                                </p>
                            </div>
                            <div class="contact-item">
                                <div class="icon">
                                    <i class="fas fa-language"></i>
                                    <span>Languages</span>
                                </div>
                                <p>
                                    <span>: Hindi, English</span>
                                </p>
                            </div>
                        </div>
                        <div class="contact-icons">
                            <div class="contact-icon">
                                <a href="#" target="_blank">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="#" target="_blank">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="https://github.com/sans-23" target="_blank">
                                    <i class="fab fa-github"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/sanskar-jain-7285a91b3/" target="_blank">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                                <a href="https://lichess.org/@/SANSKAR_JAIN" target="_blank">
                                    <span class="iconify" data-icon="simple-icons:lichess"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="right-contact">
                        <form action="" class="contact-form">
                            <div class="input-control i-c-2">
                                <input type="text" required placeholder="YOUR NAME"/>
                                <input type="email" required placeholder="YOUR EMAIL"/>
                            </div>
                            <div class="input-control">
                                <input type="text" required placeholder="ENTER SUBJECT"/>
                            </div>
                            <div class="input-control">
                                <textarea name="" id="" cols="15" rows="8" placeholder="Message Here..."></textarea>
                            </div>
                            <div class="submit-btn">
                                <a href="#" class="main-btn">
                                    <span class="btn-text">Download CV</span>
                                    <span class="btn-icon"><i class="fas fa-download"></i></span>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}