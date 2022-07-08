import React, {useState} from "react";

export default function Controlls(props){

    const isActiveList = props.list

    return (
        <div className="controls">
            <div style = {{backgroundColor: isActiveList[0] == 1 ? "#1DA1F2" : "#454e56"}} className="control" onClick = {()=>props.navigator(0)}>
                <i style = {{color: isActiveList[0] == 1 ? "#fff" : "#b2becd"}} className="fas fa-home"></i>
            </div>
            <div style = {{backgroundColor: isActiveList[1] == 1 ? "#1DA1F2" : "#454e56"}} className="control" onClick = {()=>props.navigator(1)}>
                <i style = {{color: isActiveList[1] == 1 ? "#fff" : "#b2becd"}} className="fas fa-user"></i>
            </div>
            <div style = {{backgroundColor: isActiveList[2] == 1 ? "#1DA1F2" : "#454e56"}} className="control" onClick = {()=>props.navigator(2)}>
                <i style = {{color: isActiveList[2] == 1 ? "#fff" : "#b2becd"}} className="fas fa-briefcase"></i>
            </div>
            <div style = {{backgroundColor: isActiveList[3] == 1 ? "#1DA1F2" : "#454e56"}} className="control" onClick = {()=>props.navigator(3)}>
                <i style = {{color: isActiveList[3] == 1 ? "#fff" : "#b2becd"}} className="far fa-newspaper"></i>
            </div>        
            <div style = {{backgroundColor: isActiveList[4] == 1 ? "#1DA1F2" : "#454e56"}} className="control" onClick = {()=>props.navigator(4)}>
                <i style = {{color: isActiveList[4] == 1 ? "#fff" : "#b2becd"}} className="fas fa-envelope-open"></i>
            </div>        
        </div>
    )
}