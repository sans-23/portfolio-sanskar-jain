import React, {useState} from "react";
import styles from './style.module.css';

export default function ListTile({img, url, title, subtitle}){
    return (
        <li>
        <div className={styles.listItem}>
            <img src={img} className={styles.avatarImg} />
            <a href={url}>
                <div>
                    <div className="w3-xlarge">{title}</div>
                    <div>{subtitle}</div>
                </div>
            </a>
        </div>
        </li>
    )
}