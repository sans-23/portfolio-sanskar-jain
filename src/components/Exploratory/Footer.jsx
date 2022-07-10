import React from "react";
import styles from './style.module.css';

export default function Footer(){
    return (
        <footer className="w3-padding-64 w3-text-light w3-xlarge w3-margin-left">
            <div className="contact-icons">
                <div className={styles.socialIcons}>
                    <a href="https://www.instagram.com/23_sans_/" rel="noreferrer"  target="_blank"><i className="fab fa-instagram"></i></a>
                    <a href="https://twitter.com/sans1823" rel="noreferrer" target="_blank"><i className="fab fa-twitter"></i></a>
                    <a href="https://github.com/sans-23" rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/sanskar-jain-7285a91b3/" rel="noreferrer" target="_blank"><i className="fab fa-linkedin"></i></a>
                    <a href="https://lichess.org/@/SANSKAR_JAIN" rel="noreferrer" target="_blank"><span className="iconify" data-icon="simple-icons:lichess"></span></a>
                </div>
            </div>
        </footer>
    )
}