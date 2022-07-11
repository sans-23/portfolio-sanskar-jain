import React, {useState} from "react";
import styles from './style.module.css';

export default function MemoryCard({card, handleChoice, flipped}){
    function handleClick(){
        handleChoice(card)
    }
    return (
        <div className={styles.card}>
            <div className={flipped? styles.flipped : ""}>
                <img className={styles.front} src={card.src}/>
                <img 
                className={styles.back} 
                src="https://cdn-icons-png.flaticon.com/128/1408/1408998.png"
                onClick={handleClick}
                />
            </div>
        </div>
    )
}