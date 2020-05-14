import React, {useState} from 'react';
import Iball from "./Iball"
import BarConfigCard from "./BarConfigCard"
import ScrollElement from "./ScrollElement"
import InputWithButtons from "./InputWithButtons"
import {demo, autoConfig, autoConfig2} from "./autoConfig"

function FormBar (props){
    
    let createBars = ()=>{
            let inputCards
            let bars = [];
                for (let i = 0; i < props.barNumber; i++) {
                    bars.push(<BarConfigCard barID={i} handleConfig={props.handleConfig} Bars={props.Bars} ></BarConfigCard>) 
                }
                
                if(bars.length!==0){
                   inputCards=<div className="config">
                                    <ScrollElement></ScrollElement>
                                    <div className="flex-container" id="Scroll">{bars}</div>
                              </div>;     
                }
                return inputCards;
        }
    return(
        
        <div>
        <div className="nav-form">
        <div className="nav-form-left">
            <div className="title">Graphs</div>
             <div >
                <div className="flex-row">
                <InputWithButtons ident={"xb"} handle={props.handleConfig} title={"Bars"}></InputWithButtons>
               
                <Iball>Input the number of bars</Iball>
                </div>
            </div>
        </div>
        
        <div className="nav-form-buttons">
        <div className="flex-row">
             <button className="start-button" onClick={()=>{props.startAnim(props.Bars)}}>Start</button>
             <Iball>Start the animation</Iball>
        </div>
        <div className="flex-row">
            <button className="autoconfig-button" onClick={()=>{autoConfig(props)}}>Autoconfig</button>
            <Iball>Click here to automatically get demo values</Iball>
        </div>
        
        </div>
        
        </div>
      
       
      
        
        <div >
             {createBars()}
        </div> 
       
     
              
             
                </div>

    )



}

export default FormBar;