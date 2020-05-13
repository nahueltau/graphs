import React, {useState} from 'react';
import Iball from "./Iball"
import {demo, autoConfig, autoConfig2} from "./autoConfig"

function FormBar (props){
    let scrollTemp;
    let _scroll =false;
    let [names, setNames] = useState([]);
    let [colors, setColors] = useState([]);
    let handleMouseMove = (e)=>{
       if(_scroll){
        
        let scrollMoveX = e.clientX-scrollTemp>0 ? 10 : -10;
        console.log(scrollMoveX)
        let element = document.getElementById("Scroll");
       
        element.scrollBy(scrollMoveX,0);}
    }
    let handleScroll = (e)=>{
        scrollTemp= e.clientX;
        
        let wheel = document.getElementById("scrollWheel");
        wheel.addEventListener("mousemove",(e)=>{ handleMouseMove(e)})
        let stop =document.getElementsByTagName("body");
        stop[0].addEventListener("mouseup",()=>{ handleEndScroll()})
        _scroll =true;
    }
    let handleEndScroll= ()=>{
       
        _scroll =false;
        console.log(_scroll)
    }
    let createInputs = (i)=>{
        if((props.Bars[i] !== undefined && props.Bars[i] !== null) && (props.Bars[i].stopNumber !== undefined && props.Bars[i].stopNumber !== null)){
        
         let inputs = [];
                for (let el = 0; el < props.Bars[i].stopNumber; el++) {
                   inputs.push(<div className="data-pair" key={el+1}>
                
                  <div className="data-input">
                     <input type="text" placeholder="" id={i.toString()+el.toString()+"w"} onChange={(e)=>{props.handleInput(e)}}/> 
                     <div>Value {el+1}</div> 
                  </div>
                  <div className="data-input">
                    <input type="text" placeholder="" id ={i.toString()+el.toString()+"t"} onChange={(e)=>{props.handleInput(e)}}/>
                    <div>Time {el+1}</div>
                  </div>
                  
                </div>)}
        return inputs
    }
    }
    let createBars = ()=>{
           
            let bars = [];
                for (let i = 0; i < props.barNumber; i++) {
                    bars.push(<div key={i+1} className="form-card">
                               
                                <div className="card-title">{names[i] || "Bar "+(i+1)}</div>
                                <div className="card-name">
                                    <div>Name</div> <input type="text"  id={i.toString()+"n"} onChange={(e)=>{props.handleConfig(e);names[i]=e.target.value ;setNames(names);}}/>
                                </div>
                                <div className="card-color">
                                    <div>Color</div> 
                                    <div className="card-color-input">
                                        <input type="text" id={i.toString()+"c"} onChange={(e)=>{props.handleConfig(e);colors[i]=e.target.value ;setColors(colors);}}/>
                                        <div className="color-circle-out"><div className="color-circle-in" style={{backgroundColor:colors[i]}}></div></div>
                                    </div>
                                 
                                </div>
                                <div className="card-stop">
                                    <div>Stops</div> 
                                    <div className="input-with-buttons">
                                      <div className="circle-button">-</div>
                                     <input type="text" id={i.toString()+"s"} onChange={(e)=>{props.handleConfig(e)}}/>
                                     <div className="circle-button">+</div>
                                     </div> 
                                </div>
                                {createInputs(i)}
                               
                                </div>)
                    
                }
                let scroll
                if(bars.length!==0){
                   scroll=<div className="config">
                   <div className="scroll-element" >
                    <p>Scroll</p>
                        <div className="scroll">
                                
                                    <div className="scroll-bump"></div>
                                    <div className="scroll-bump-shadow" id="scrollWheel"  onMouseDown={(e)=>{handleScroll(e)}}></div>
                                
                                        <div className="scroll-shadow"></div>
                                    <div className="scroll-light"></div>
                                
                        </div>
                    </div>;
                    <div className="flex-container" id="Scroll">
                    {bars}
                    </div>
                    </div>;
                    
                }
                return scroll;
        }
    

        

    
       

    return(
        
        <div>
        <div className="nav-form">
        <div className="nav-form-left">
            <div className="title">Graphs</div>
             <div >
                
                <div className="input-with-buttons">
                <span>Bars</span>
                    <div className="circle-button">-</div>
                    <input type="text"  id={"xb"} onChange={(e)=>{props.handleConfig(e)}}/>
                    <div className="circle-button">+</div><Iball>Input the number of bars</Iball>
                </div>
            </div>
        </div>
        
        <div className="nav-form-buttons">
        <button className="start-button" onClick={()=>{props.startAnim(props.Bars)}}>Start</button>
        <button className="autoconfig-button" onClick={()=>{autoConfig(props)}}>Autoconfig</button>
        </div>
        
        </div>
      
       
      
        
        <div >
             {createBars()}
        </div> 
       
     
              
             
                </div>

    )



}

export default FormBar;