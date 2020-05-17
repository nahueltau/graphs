import React from 'react';
import InputWithButtons from "./InputWithButtons"
import ColorInput from "./ColorInput"
import BarNameInput from './BarNameInput'
import PercentInput from './PercentInput'
import NumberInput from './NumberInput'

function BarConfigCard(props){
   
    
    let createInputs = (i)=>{
        if((props.Bars[i] !== undefined && props.Bars[i] !== null) && (props.Bars[i].stopNumber !== undefined && props.Bars[i].stopNumber !== null)){
        
         let inputs = [];
                for (let el = 0; el < props.Bars[i].stopNumber; el++) {
                   inputs.push(<div className="data-pair" key={el+1}>
                
                  
                  <NumberInput handleInput={props.handleInput} el={el} i={i}></NumberInput>
                  <PercentInput handleInput={props.handleInput} el={el} i={i}></PercentInput>
                </div>)}
        return inputs
    }
    }
    return(
        <div key={props.barID+1} className="form-card">
                               
           <BarNameInput barID={props.barID} handleConfig={props.handleConfig}></BarNameInput>
            <ColorInput barID={props.barID} handleConfig={props.handleConfig}></ColorInput>
        
                <InputWithButtons title={"Nº of Stops"} handle={props.handleConfig} ident={props.barID.toString()+"s"} iball="Values to be shown at specific times of the animation"></InputWithButtons>
                
            {createInputs(props.barID)}
            
            </div>

    )
}


export default BarConfigCard