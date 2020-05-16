import React from 'react';
import InputWithButtons from "./InputWithButtons"
import ColorInput from "./ColorInput"
import BarNameInput from './BarNameInput'
function BarConfigCard(props){
   
    
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
                               
           <BarNameInput barID={props.barID} handleConfig={props.handleConfig}></BarNameInput>
            <ColorInput barID={props.barID} handleConfig={props.handleConfig}></ColorInput>
           
            <div className="card-stop">
                <div>Nº of Stops</div> 
                <InputWithButtons title={""} handle={props.handleConfig} ident={props.barID.toString()+"s"}></InputWithButtons>
                
            </div>
            {createInputs(props.barID)}
            
            </div>

    )
}


export default BarConfigCard