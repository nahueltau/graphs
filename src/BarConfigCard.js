import React, {useState} from 'react';
import InputWithButtons from "./InputWithButtons"
function BarConfigCard(props){
    let [names, setNames] = useState([]);
    let [colors, setColors] = useState([]);
    
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
    return(
        <div key={props.barID+1} className="form-card">
                               
            <div className="card-title">{names[props.barID] || "Bar "+(props.barID+1)}</div>
            <div className="card-name">
                <div>Name</div> <input type="text"  id={props.barID.toString()+"n"} onChange={(e)=>{props.handleConfig(e);names[props.barID]=e.target.value ;setNames(names);}}/>
            </div>
            <div className="card-color">
                <div>Color</div> 
                <div className="card-color-input">
                    <input type="text" id={props.barID.toString()+"c"} onChange={(e)=>{props.handleConfig(e);colors[props.barID]=e.target.value ;setColors(colors);}}/>
                    <div className="color-circle-out"><div className="color-circle-in" style={{backgroundColor:colors[props.barID]}}></div></div>
                </div>
                
            </div>
            <div className="card-stop">
                <div>Stops</div> 
                <InputWithButtons title={""} handle={props.handleConfig} ident={props.barID.toString()+"s"}></InputWithButtons>
                
            </div>
            {createInputs(props.barID)}
            
            </div>

    )
}


export default BarConfigCard