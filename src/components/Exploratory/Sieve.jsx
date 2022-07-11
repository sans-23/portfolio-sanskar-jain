import React, {useState} from "react";
import styles from './style.module.css';
import List from "./List";
import Footer from "./Footer";

var sieveA = [63.0, 4.75, 2.00, 1.40, 1.00, 0.50, 0.25, 0.125, 0.075, 0.063, 0.020, 0.004, 0.002, 0.001]
var sieveB =  [63.0, 20.0, 6.3, 2.0, 0.6, 0.212, 0.063, 0.020, 0.006, 0.002]
var initialA = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
var initialB = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]

export default function Sieve(){
    const [sideNav, setSideNav] = useState(false);
    const [isSieveA, setisSieveA] = useState(true);
    const [inputA, setinputA] = useState(initialA);
    const [inputB, setinputB] = useState(initialB);
    function getDeepCopy(arr){
        return JSON.parse(JSON.stringify(arr));
    }
    function onInputChangeA(e,i){
        var val = parseFloat(e.target.value) || -1;
        var arr = getDeepCopy(inputA);
        arr[i] = val;
        setinputA(arr);
    }
    function onInputChangeB(e,i){
        var val = parseFloat(e.target.value) || -1;
        var arr = getDeepCopy(inputB);
        arr[i] = val;
        setinputB(arr);
    }
    function debug(){
        console.log(inputA, inputB);
    }
    function showSieveA(){
        setisSieveA(true);
    }
    function showSieveB(){
        setisSieveA(false);
    }
    function toggleNav(){
        setSideNav(!sideNav);
    }
    return (
        <>
        <div className="w3-hide-small">
                <div className="w3-bar w3-centre w3-large w3-dark w3-round w3-border">
                    <a href="#" className="w3-bar-item w3-light-grey">Unified Soil Classification System</a>
                    <a href="#" className="w3-bar-item"> Portfolio</a>
                    <a href="#" className="w3-bar-item"> About</a>
                </div>
            </div>
            <div style={{height:"59px", backgroundColor:"#12181b"}} className="w3-top w3-bar w3-hide-large w3-hide-medium">
                <img style={{height:"59px"}} className="w3-bar-item w3-left" src="https://sans1812.pythonanywhere.com/static/img/qrious.png" alt="logo" />
                <span style={{fontSize:"30px"}} className="w3-bar-item w3-text-light w3-right" onClick={toggleNav}>&#9776;</span>
            </div>
            {sideNav ?
                <div id="mySidenav" style={{marginTop:"60px"}}>
                    <a href="#" className="w3-button w3-block">Home</a>
                    <a href="#" className="w3-button w3-block"> About</a>
                </div>:<div></div>
            }
        <div className={styles.wrapper}>
            <div className="w3-container w3-half w3-padding-48">
                <div className="w3-row w3-padding">
                    <button className="w3-button w3-col s6 w3-center" onClick={showSieveA}>SET 1</button>
                    <button className="w3-button w3-col s6 w3-center" onClick={showSieveB}>SET 2</button>
                </div>
                { isSieveA?
            
                    <table className="w3-table w3-centered w3-card-4 w3-round-xlarge" style={{color:"#fff", backgroundColor:"#12181b", border:"none"}}>
                        <tr className="w3-round-xlarge" style={{fontWeight:"bold"}}>
                            <th><h5>Sieve Size</h5></th>
                            <th>
                                <select className="w3-select" name="option1" onChange={toggleNav}>
                                <option value="pf1">Percentage Finer</option>
                                <option value="mr1">Mass Retained</option>
                                </select>
                            </th>
                        </tr>
                        {
                            sieveA.map((s, i)=>{
                                return (
                                    <tr key={s*(i+10001)}>
                                        <td><label> {s} mm</label></td>
                                        <td><input className="w3-input" type="number" onChange={(e)=>onInputChangeA(e,i)} min="0"/></td>
                                    </tr>
                                )
                            })
                        }
                        <tr>
                            <td><label className="w3-badge"></label></td>
                            <td><button className="w3-button w3-round-large w3-block w3-section w3-blue w3-ripple w3-padding" onClick={debug}>Classify</button></td>
                        </tr>
                    </table>
                :
            
                    <table className="w3-table w3-centered w3-card-4 w3-round-xlarge" style={{color:"#fff", backgroundColor:"#12181b", border:"none"}}>
                        <tr className="w3-round-xlarge">
                            <th><h5>Sieve Size</h5></th>
                            <th>
                                <select className="w3-select" name="option2" onChange={toggleNav}>
                                <option value="pf2">Percentage Finer</option>
                                <option value="mr2">Mass Retained</option>
                                </select>
                            </th>
                        </tr>
                        {
                            sieveB.map((s, i)=>{
                                return (
                                    <tr key={s*i}>
                                        <td><label> {s} mm</label></td>
                                        <td><input className="w3-input" type="number" onChange={(e)=>onInputChangeB(e,i)} min="0"/></td>
                                    </tr>
                                )
                            })
                        }
                        <tr>
                            <td><label className="w3-badge"></label></td>
                            <td><button className="w3-button w3-round-large w3-block w3-section w3-blue w3-ripple w3-padding" onClick={debug}>Classify</button></td>
                        </tr>
                    </table>
                }
                
            </div>
            <List/>
            <div>
            
            </div>
        </div>
        <Footer/>
        </>
    )
}