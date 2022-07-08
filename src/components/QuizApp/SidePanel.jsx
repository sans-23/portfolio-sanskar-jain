import React from "react";
import styles from './style.module.css'
import Badge from "./Badge";

export default function SidePanel(){
    return(
        <div className={styles.sidePanel}>
            <h3 className={styles.timer}>
                Time left <p>00:23</p>
            </h3>
            <div className={styles.stats}>
                <div style={{display:"flex", gap:"1rem", alignItems:"center"}}>
                    <Badge text="1" /> 
                    <p>Answered</p>
                </div>
                <div style={{display:"flex", gap:"1rem", alignItems:"center"}}>
                    <Badge text="1" />    
                    <p>Unanswered</p>
                </div>
                <div style={{display:"flex", gap:"1rem", alignItems:"center"}}>
                    <Badge text="1" />    
                    <p>For review</p>
                </div>
                <div style={{display:"flex", gap:"1rem", alignItems:"center"}}>
                    <Badge text="1" />    
                    <p>Not visited</p>
                </div>  
            </div>
        </div>
    )
}