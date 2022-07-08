import React from "react";
import styles from './style.module.css'
import Badge from "./Badge";

export default function QuestionBar(){
    return(
        <div className={styles.questionbar}>
            <Badge text="1" />
            <Badge text="2" />
            <Badge text="3" />
        </div>
    )
}