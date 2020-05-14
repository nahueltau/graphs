import React, {useState} from 'react';

function InputWithButtons(props){
function addOne(){
    
    let value = document.getElementById(props.ident);
    value.valueAsNumber = value.valueAsNumber + 1;
    console.log(value)
}
return(
    <div className="input-with-buttons">
                <span>{props.title}</span>
                    <div className="circle-button">-</div>
                    <input type="number" min="0" id={props.ident} onChange={(e)=>{props.handle(e)}}/>
                    <div className="circle-button" onClick={addOne}>+</div>
                </div>

)

}

export default InputWithButtons