import React from "react";
import styles from './style.module.css'

export default function Badge(props){
    console.log(props)
    const stylex = {
        width: props.width,
        height: props.height,
        backgroundColor: props.color
    }
    return(
        <div style={stylex} className={styles.badge}>
            <p>{props.text}</p>
        </div>
    )
}