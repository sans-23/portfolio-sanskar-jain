import React, {useState} from "react";
import { useEffect } from "react";
import MemoryCard from "./MemoryCard";
import styles from './style.module.css';

var cardImages = [
    {"src": "https://cdn-icons-png.flaticon.com/128/1752/1752787.png" ,matched:false},
    {"src": "https://cdn-icons-png.flaticon.com/128/188/188988.png" ,matched:false},
    {"src": "https://cdn-icons-png.flaticon.com/128/189/189001.png" ,matched:false},
    {"src": "https://cdn-icons-png.flaticon.com/128/188/188924.png" ,matched:false},
    {"src": "https://cdn-icons-png.flaticon.com/128/189/189004.png" ,matched:false},
    
    {"src": "https://cdn-icons-png.flaticon.com/128/189/189003.png" ,matched:false},
    {"src": "https://cdn-icons-png.flaticon.com/128/188/188987.png" ,matched:false},
    {"src": "https://cdn-icons-png.flaticon.com/128/188/188989.png" ,matched:false}
]
export default function MemoryGame(){
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)

    function shuffleCards(){
        const shuffledCards = [...cardImages, ...cardImages]
        .sort(()=> Math.random()-0.5)
        .map((card, i)=>({...card, id : i}))

        setCards(shuffledCards)
        setTurns(0)
    }
    function handleChoice(card){
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }
    useEffect(()=>{
        if(choiceOne && choiceTwo){
            if(choiceOne.src===choiceTwo.src){
                setCards(prev=>{
                    return prev.map(card => {
                        if(card.src===choiceOne.src){
                            return {...card, matched:true}
                        }else{
                            return card
                        }
                    })
                })
                resetTurn()
            }else{
                setTimeout(()=>resetTurn(), 500)
            }
            
        }
    }, [choiceOne,choiceTwo])
    function resetTurn(){
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns(prev=>prev+1)
    }
    return (
        <>
        <div className={styles.wrapper}>
            <img className={styles.logo} src="https://www.freepnglogos.com/uploads/gotta-catch-em-all-transparent-pokemon-logo-11.png"></img>
            <img className={styles.play} onClick={shuffleCards} src="https://cdn1.iconfinder.com/data/icons/pokemon-set/24/Pokeball-512.png"/>
            <button className={styles.btn} onClick={shuffleCards}>New Game</button>

            <div className={styles.cardGrid}>
                {cards.map(card=>(
                    <MemoryCard 
                    key={card.id} 
                    card={card}
                    handleChoice={handleChoice}
                    flipped={card===choiceOne || card===choiceTwo || card.matched}
                    />
                ))}
            </div>
            {cards.length>0 ? <div className={styles.turn}>Turns : {turns}</div> : <div></div>}
            
        </div>
        </>
    )
}