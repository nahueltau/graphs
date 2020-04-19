import React, {useState} from 'react';


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
    

    
    let autoConfig = ()=>{
        let event = new Event('build');
        document.getElementById("xb").addEventListener('build',(e)=>{props.handleConfig(e)});
        document.getElementById("xb").value = 3;
        document.getElementById("xb").dispatchEvent(event);
        setTimeout(()=>{
            let event = new Event('build');
            document.getElementById("0n").addEventListener('build',(e)=>{props.handleConfig(e)});
            document.getElementById("0n").value = "Argentina";
            document.getElementById("0n").dispatchEvent(event);
            document.getElementById("1n").addEventListener('build',(e)=>{props.handleConfig(e)});
            document.getElementById("1n").value = "Brasil";
            document.getElementById("1n").dispatchEvent(event);
            document.getElementById("2n").addEventListener('build',(e)=>{props.handleConfig(e)});
            document.getElementById("2n").value = "Uruguay";
            document.getElementById("2n").dispatchEvent(event);
            document.getElementById("0s").addEventListener('build',(e)=>{props.handleConfig(e)});
            document.getElementById("0s").value = 3;
            document.getElementById("0s").dispatchEvent(event);
            document.getElementById("1s").addEventListener('build',(e)=>{props.handleConfig(e)});
            document.getElementById("1s").value = 2;
            document.getElementById("1s").dispatchEvent(event);
            document.getElementById("2s").addEventListener('build',(e)=>{props.handleConfig(e)});
            document.getElementById("2s").value = 3;
            document.getElementById("2s").dispatchEvent(event);
        },20)
        setTimeout(()=>{
            let event = new Event('build');
            document.getElementById("00w").addEventListener('build',(e)=>{props.handleInput(e)});
            document.getElementById("00w").value = 500;
            document.getElementById("00w").dispatchEvent(event);
            document.getElementById("00t").addEventListener('build',(e)=>{props.handleInput(e)});
            document.getElementById("00t").value =50;
            document.getElementById("00t").dispatchEvent(event);
            document.getElementById("01w").addEventListener('build',(e)=>{props.handleInput(e)});
            document.getElementById("01w").value = 1000;
            document.getElementById("01w").dispatchEvent(event);
            document.getElementById("01t").addEventListener('build',(e)=>{props.handleInput(e)});
            document.getElementById("01t").value =80;
            document.getElementById("01t").dispatchEvent(event);
            document.getElementById("02w").addEventListener('build',(e)=>{props.handleInput(e)});
            document.getElementById("02w").value =2000;
            document.getElementById("02w").dispatchEvent(event);
            document.getElementById("02t").addEventListener('build',(e)=>{props.handleInput(e)});
            document.getElementById("02t").value =150;
            document.getElementById("02t").dispatchEvent(event);
            
            document.getElementById("10w").addEventListener('build',(e)=>{props.handleInput(e)});
            document.getElementById("10w").value = 400;
            document.getElementById("10w").dispatchEvent(event);
            document.getElementById("10t").addEventListener('build',(e)=>{props.handleInput(e)});
            document.getElementById("10t").value =50;
            document.getElementById("10t").dispatchEvent(event);
            document.getElementById("11w").addEventListener('build',(e)=>{props.handleInput(e)});
            document.getElementById("11w").value = 2500;
            document.getElementById("11w").dispatchEvent(event);
            document.getElementById("11t").addEventListener('build',(e)=>{props.handleInput(e)});
            document.getElementById("11t").value =160;
            document.getElementById("11t").dispatchEvent(event);

            document.getElementById("20w").addEventListener('build',(e)=>{props.handleInput(e)});
            document.getElementById("20w").value = 200;
            document.getElementById("20w").dispatchEvent(event);
            document.getElementById("20t").addEventListener('build',(e)=>{props.handleInput(e)});
            document.getElementById("20t").value =50;
            document.getElementById("20t").dispatchEvent(event);
            document.getElementById("21w").addEventListener('build',(e)=>{props.handleInput(e)});
            document.getElementById("21w").value = 1000;
            document.getElementById("21w").dispatchEvent(event);
            document.getElementById("21t").addEventListener('build',(e)=>{props.handleInput(e)});
            document.getElementById("21t").value =120;
            document.getElementById("21t").dispatchEvent(event);
            document.getElementById("22w").addEventListener('build',(e)=>{props.handleInput(e)});
            document.getElementById("22w").value = 2100;
            document.getElementById("22w").dispatchEvent(event);
            document.getElementById("22t").addEventListener('build',(e)=>{props.handleInput(e)});
            document.getElementById("22t").value =160;
            document.getElementById("22t").dispatchEvent(event);
        },20)
       
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
                    <div className="circle-button">+</div>
                </div>
            </div>
        </div>
        
        <div className="nav-form-buttons">
        <button className="start-button" onClick={()=>{props.startAnim(props.Bars)}}>Start</button>
        <button className="autoconfig-button" onClick={autoConfig}>Autoconfig</button>
        </div>
        
        </div>
      
       
      
        
        <div >
             {createBars()}
        </div> 
       
     
              
             
                </div>

    )



}

export default FormBar;