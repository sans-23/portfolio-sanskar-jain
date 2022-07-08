import React from "react";
import Badge from "./Badge";
import styles from './style.module.css'

export default function CurrentUser(){
    return(
        <div className={styles.currentUser}>
            <Badge text="S"/>
            <p>sans-23</p>
        </div>
    )
}